import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  Legend,
  ReferenceLine,
  BarChart,
  Bar,
} from "recharts";
import "./chart.css";
import React, { useContext } from "react";
import CreateContext from "../../../../Context/CreateContext"

export default function Chart({ title, data, dataKey, grid }) {

     //authors
  const {authors} = useContext(CreateContext);
  const [AllAuthors] = authors;

   //getting all blogs from context
   const { blogDatas } = useContext(CreateContext);
   const [AllBlogData] = blogDatas;

  return (
    <div>
    <div className="chart card shadow-lg" style={{ marginLeft: "60px", width:"750px", height:"280px" }}>
      <h4
        className="chartTitle pt-xl-1"
        style={{
          color: "gray",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {title}
      </h4>
      <BarChart
        width={700}
        height={200}
        data={AllAuthors}
        style={{ marginTop: "2px" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="fName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar barSize={80} dataKey="age" fill="#8884d8" />
        <Bar barSize={50} dataKey="age" fill="#82ca9d" />
      </BarChart>
      </div>
    
      <div className="chart card shadow-lg" style={{ marginLeft: "60px", width:"750px"   }}>
      <ResponsiveContainer aspect={4} width={720}>
        <LineChart
          data={AllAuthors}
          width={700}
          height={900}
          margin={{ right: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="fName"
            stroke="blue"
            interval={"preserveStartEnd"}
          />
          <YAxis stroke="black" />
          <Tooltip contentStyle={{ backgroundColor: "orange" }} />
          <Legend />
          <ReferenceLine y="age" label="Max" stroke="red" />
          <Line
            type="monotone"
            dataKey="age"
            stroke="red"
            strokeWidth={1}
            activeDot={{ r: 10 }}
          />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}
