using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebSocket.Portable;
using Xamarin.Forms;
using XamClient.Model;

namespace XamClient
{
	public partial class App : Application
	{
        public static WebSocketClient Client { get; set; }
        public static event OnReceiveDataHandler ReceiveData;
        public delegate void OnReceiveDataHandler(object sender, Type type);

        private bool SocketConnected = false;

        public static readonly string DATA = "database.db";
        public App ()
		{
			InitializeComponent();

            MainPage = new LoadingPage();
		}

        private async Task InitDB()
        {
            PCLStorage.ExistenceCheckResult check = await PCLStorage.FileSystem.Current.LocalStorage.CheckExistsAsync(DATA);
            if (check != PCLStorage.ExistenceCheckResult.FileExists)
            {
                SQLite.SQLiteConnection connection = new SQLite.SQLiteConnection(PCLStorage.PortablePath.Combine(PCLStorage.FileSystem.Current.LocalStorage.Path, App.DATA));
                connection.CreateTable<SocketServerInfo>(SQLite.CreateFlags.AutoIncPK);
                if (connection.Table<SocketServerInfo>().Count() == 0)
                {
                    connection.Insert(new SocketServerInfo() { Url = "ws://192.168.210.105:5000/ws", IsSelected = true });
                }
                connection.Commit();
                connection.Close();
            }
        }

        private async Task SetupSocketClient()
        {
            Client = new WebSocketClient();

            Client.MessageReceived += Client_MessageReceived;
            SQLite.SQLiteConnection connection = new SQLite.SQLiteConnection(PCLStorage.PortablePath.Combine(PCLStorage.FileSystem.Current.LocalStorage.Path, App.DATA));
            if (connection.Table<SocketServerInfo>().Any(x => x.IsSelected))
            {
                var url = connection.Table<SocketServerInfo>().Where(x => x.IsSelected).FirstOrDefault().Url;
                
                Task.Run(async () => {
                    await Task.Delay(10000);
                    if (!SocketConnected)
                    {
                        Device.BeginInvokeOnMainThread(async () => { await Current.MainPage.DisplayAlert("Lỗi", "Không thể kết nối đến máy chủ, vui lòng kiểm tra lại đường truyền mạng", "OK"); });
                    }
                });
                await Client.OpenAsync(url);
                SocketConnected = true;
                Client.AutoSendPongResponse = true;
                Client.Closed += Client_Closed;
                Client.Error += Client_Error;
            }
        }

        private void Client_MessageReceived(WebSocket.Portable.Interfaces.IWebSocketMessage obj)
        {
            var receive = ReceiveData;
            if (receive != null)
            {
                ReceiveData(obj, typeof(WebSocket.Portable.Interfaces.IWebSocketMessage));
            }
        }

        private async void Client_Error(Exception obj)
        {
            await Task.Delay(1000);
            Client.Dispose();
            Client = null;
            await SetupSocketClient();
        }

        private async void Client_Closed()
        {
            await Task.Delay(1000);
            Client.Dispose();
            Client = null;
            await SetupSocketClient();
        }

        protected override async void OnStart()
        {
            await InitDB();
            await SetupSocketClient();
            //await Task.Delay(3000);
            var main = new MainPage();
            MainPage = main;
            // Handle when your app starts
        }

        protected override void OnSleep ()
		{
			// Handle when your app sleeps
		}

		protected override void OnResume ()
		{
			// Handle when your app resumes
		}
	}
}
