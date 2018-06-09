using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace XamClient
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class ESP8266 : ContentPage
    {
        public ESP8266()
        {
            InitializeComponent();
            button.Clicked += Button_Clicked;
            slider.ValueChanged += Slider_ValueChanged;
        }

        private void Slider_ValueChanged(object sender, ValueChangedEventArgs e)
        {
            label.Text = "value:" + (int)e.NewValue;
        }

        private void Button_Clicked(object sender, EventArgs e)
        {

        }
    }
}