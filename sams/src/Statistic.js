import "./Statistic.css";
import {
	LineChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';


// Sample chart data
const pdata = [
	{
		year: '2016',
		Customers: 12000,
		Sales: 400000
	},
	{
		year: '2017',
		Customers: 15000,
		Sales: 300000
	},
	{
		year: '2018',
		Customers: 17000,
		Sales: 100000
	},
	{
		year: '2019',
		Customers: 18000,
		Sales: 500000
	},
	{
		year: '2020',
		Customers: 25000,
		Sales:500000
	},
	{
		year: '2021',
		Customers: 50000,
		Sales: 407800
	},
];

function Statistic() {
	return (

		<><div>
      <br></br>
        <div className="row">
          <div className="col">
          <img
          className="profileimg"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        /><br></br>

            <b className="title">Hello Miti</b>
          </div>
          {/* <div className="col">
            miti
          </div>
          <div className="col">
            miti
          </div> */}
      </div>
      <div className="row">
          <div className="col">
            miti
          </div>
          <div className="col">
            miti
          </div>
          <div className="col">
            miti
          </div></div>
      </div>
			<h1 className="text-heading">
				Line Chart Using Rechart
			</h1>
			<ResponsiveContainer width="100%" aspect={3}>
				<LineChart data={pdata} margin={{ right: 300 }}>
					<CartesianGrid />
					<XAxis dataKey="year"
						interval={'preserveStartEnd'} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Line dataKey="Customers"
						stroke="black" activeDot={{ r: 8 }} />
					<Line dataKey="Sales"
						stroke="red" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</>
	);
}

export default Statistic;
