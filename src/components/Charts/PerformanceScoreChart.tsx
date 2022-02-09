import * as d3 from 'd3';
import { useEffect } from 'react';
import { msInYear } from '../../constants';
import { getYearFromDate } from '../../utils';
import './chart.css';

interface PerformanceScorePoint {
  event: string;
  score: number;
  performance: string;
  date: number;
}

const PerformanceScoreChart = () => {
  useEffect(() => {
    buildGraph(performanceScoreData);
  });

  const performanceScoreData: PerformanceScorePoint[] = [
    {
      event: '400m',
      score: 943,
      performance: '48.60',
      date: 1622073600,
    },
    {
      event: '400m',
      score: 1001,
      performance: '48.64i',
      date: 1580000400,
    },
    {
      event: '400m',
      score: 1022,
      performance: '47.35',
      date: 1564272000,
    },
    {
      event: '400m',
      score: 1003,
      performance: '47.65',
      date: 1534032000,
    },
    {
      event: '400m',
      score: 1026,
      performance: '47.29',
      date: 1497744000,
    },
    {
      event: '400m',
      score: 926,
      performance: '48.87',
      date: 1466208000,
    },
    {
      event: '400m',
      score: 829,
      performance: '50.5',
      date: 1438992000,
    },
  ];

  const buildGraph = (data: PerformanceScorePoint[]) => {
    // to later become props
    const chartTitle = '400m Performance Scores';

    // @ts-ignore
    const { width, height } = d3.select('#plot').node().getBoundingClientRect();
    const plotMargins = { x: 40, y: 25 };
    const dateMax = d3.max(data, (d) => d.date) as number;
    const dateMin = d3.min(data, (d) => d.date) as number;
    const scoreMax = d3.max(data, (d) => d.score) as number;
    const scoreMin = d3.min(data, (d) => d.score) as number;

    // define our scaling functions
    const xScale = d3
      .scaleLinear()
      // @ts-ignore
      .domain([dateMin, dateMax])
      .range([plotMargins.x, width - plotMargins.x]);
    const yScale = d3
      .scaleLinear()
      // @ts-ignore
      .domain([scoreMin, scoreMax])
      .range([height - plotMargins.y, plotMargins.y]);

    const graph = d3.select('svg').attr('width', width).attr('height', height);
    const plot = graph.selectAll('g').data(data).enter().append('g');
    const xAxis = d3
      .axisBottom(xScale)
      .ticks((dateMax - dateMin) / msInYear)
      .tickFormat((d, i) => (i % 2 ? getYearFromDate(d as number) : ''));
    const yAxis = d3.axisLeft(yScale).ticks(5);

    plot
      .append('circle')
      .attr('r', 2)
      .attr('cx', (d) => xScale(d.date))
      .attr('cy', (d) => yScale(d.score))
      .attr('fill', 'black')
      .on('mouseover', (_, d) => {
        plot.selectAll(`#tooltip${d.date}`).attr('visibility', 'visible');
      })
      .on('mouseout', (_, d) => {
        plot.selectAll(`#tooltip${d.date}`).attr('visibility', 'hidden');
      });

    plot
      .append('rect')
      .attr('class', 'tooltip')
      .attr('id', (d) => `tooltip${d.date}`)
      .attr('x', (d) => xScale(d.date))
      .attr('y', (d) => yScale(d.score))
      .attr('width', 21)
      .attr('height', 12)
      .attr('transform', `translate(1, 1)`)
      .attr('dy', 5)
      .attr('fill', 'black')
      .attr('visibility', 'hidden');

    plot
      .append('text')
      .attr('class', 'tooltip')
      .attr('id', (d) => `tooltip${d.date}`)
      .attr('x', (d) => xScale(d.date))
      .attr('y', (d) => yScale(d.score))
      .attr('transform', `translate(21, 5)`)
      .attr('dy', 5)
      .attr('fill', 'whitesmoke')
      .attr('visibility', 'hidden')
      .text((d) => d.performance);

    // add axes
    plot
      .append('g')
      .attr('transform', `translate(0, ${height - plotMargins.y})`)
      .call(xAxis);
    plot.append('g').attr('transform', `translate(${plotMargins.x},0)`).call(yAxis);

    // add title
    plot
      .append('text')
      .attr('class', 'title')
      .attr('x', width - chartTitle.length)
      .attr('y', plotMargins.y / 2)
      .attr('text-anchor', 'middle')
      .text(chartTitle);
  };

  return (
    <div className="svg">
      <svg id="plot" className="container"></svg>
    </div>
  );
};
export default PerformanceScoreChart;
