using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace XamClient
{
	public partial class MainPage : ContentPage
	{
		public MainPage()
		{
			InitializeComponent();
            button.Clicked += Button_Clicked;
            App.ReceiveData += App_ReceiveData;
		}

        private void App_ReceiveData(object sender, Type type)
        {
            result.Text += ((WebSocket.Portable.Interfaces.IWebSocketMessage)sender).ToString();
        }

        private async void Button_Clicked(object sender, EventArgs e)
        {
            await App.Client.SendAsync(entry.Text);
        }
    }
}
