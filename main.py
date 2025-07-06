from flask import Flask
import pandas as pd
from prophet import Prophet

app = Flask(__name__)

@app.route("/prophet_ai")
def future_prediction():
    data_frame = pd.read_csv("sales.csv")
    results = []
    for item in data_frame['item_name'].unique():
        # looping through each item in the data_frame and creating a item_data who has value according to Prophet model criteria
        item_data = data_frame[data_frame['item_name'] == item].copy()
        item_data.rename(columns={'date': 'ds', 'sales': 'y'}, inplace=True)
        item_data['ds'] = pd.to_datetime(item_data['ds'])
        # creating a Prophet model and fitting it with the item_data
        model = Prophet()
        model.fit(item_data)
        # making future predictions for the next 30 days
        future = model.make_future_dataframe(periods=30)
        forecast = model.predict(future)
        # calculating the total sales for the next 30 days
        future_sales = forecast.tail(30)['yhat'].sum()
        # appending the results to the results list
        results.append({
            'item_name': item,
            'future_sales': future_sales
        })
    return results

if __name__ == '__main__':
    app.run(debug=True)