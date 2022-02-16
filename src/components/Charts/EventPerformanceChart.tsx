import * as d3 from 'd3';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getPerformancesOfEventId } from '../../selectors/performances';
import { msInYear } from '../../constants';
import { formatPerformance, getYearFromDate } from '../../utils';
import { Performance } from '../../types';
import './chart.css';

const EventPerformanceChart = () => {
  const bigMaxPerformance = 999999;
  const plotMargins = { x: 20, y: 25 };
  const performances = useSelector(getPerformancesOfEventId('1'));
  const [limit, setLimit] = useState(bigMaxPerformance);
  const filteredPerformances = performances.filter((performance) => performance.performance <= limit);
  useEffect(() => {
    if (filteredPerformances.length) {
      drawGraph(filteredPerformances);
    }
  }, [filteredPerformances]);

  //chart controls
  const handlePerformanceLimitIncrease = () => {
    setLimit(limit + 0.1);
  };

  const handlePerformanceLimitDecrease = () => {
    setLimit(limit - 0.1);
  };

  const drawGraph = (data: Performance[]) => {
    // to later become props
    const chartTitle = '400m Performance';

    // @ts-ignore
    const { width, height } = d3.select('#plot').node().getBoundingClientRect();
    const dateMax = d3.max(data, (d) => d.date) as number;
    const dateMin = d3.min(data, (d) => d.date) as number;
    const performanceMax = d3.max(data, (d) => d.performance) as number;
    const performanceMin = d3.min(data, (d) => d.performance) as number;
    if (limit === bigMaxPerformance) {
      setLimit(performanceMax);
    }

    // define our scaling functions
    const xScale = d3
      .scaleLinear()
      // @ts-ignore
      .domain([dateMin, dateMax])
      .range([plotMargins.x, width - plotMargins.x]);
    const yScale = d3
      .scaleLinear()
      // @ts-ignore
      .domain([performanceMin, performanceMax])
      .range([height - plotMargins.y, plotMargins.y]);

    const graph = d3.select('svg').attr('width', width).attr('height', height);
    graph.selectAll('*').remove();
    const plot = graph.selectAll('g').data(data).enter();
    const xAxis = d3
      .axisBottom(xScale)
      .ticks((dateMax - dateMin) / msInYear)
      .tickFormat((d, i) => (i % 2 ? '' : getYearFromDate(d as number)));
    const yAxis = d3.axisLeft(yScale).ticks(5);

    plot
      .append('circle')
      .attr('r', 3)
      .attr('cx', (d) => xScale(d.date))
      .attr('cy', (d) => yScale(d.performance))
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
      .attr('y', (d) => yScale(d.performance))
      .attr('width', 23)
      .attr('height', 12)
      .attr('transform', `translate(-23, 1)`)
      .attr('dy', 5)
      .attr('fill', 'black')
      .attr('visibility', 'hidden');

    plot
      .append('text')
      .attr('class', 'tooltip')
      .attr('id', (d) => `tooltip${d.date}`)
      .attr('x', (d) => xScale(d.date))
      .attr('y', (d) => yScale(d.performance))
      .attr('transform', `translate(0, 5)`)
      .attr('dy', 5)
      .attr('fill', 'whitesmoke')
      .attr('visibility', 'hidden')
      .text((d) => formatPerformance(d.performance, '400', []));

    // add axes
    plot
      .append('g')
      .attr('transform', `translate(0, ${height - plotMargins.y})`)
      .call(xAxis)
      .selectAll('text')
      .attr('x', 25)
      .attr('y', 0)
      .attr('transform', 'rotate(60)');
    plot.append('g').attr('transform', `translate(${plotMargins.x},0)`).call(yAxis);

    // add title
    plot
      .append('text')
      .attr('class', 'title')
      .attr('x', width - chartTitle.length)
      .attr('y', plotMargins.y / 2)
      .attr('text-anchor', 'middle')
      .text(chartTitle);

    plot.exit().remove();
  };

  return (
    <div className="chartContainer">
      <div className="chartControls small-text">
        <div>Limit: {limit?.toFixed(2)}</div>
        <div className="button increase" onClick={handlePerformanceLimitIncrease}>
          Increase
        </div>
        <div className="button decrease" onClick={handlePerformanceLimitDecrease}>
          Decrease
        </div>
      </div>
      <div className="svg">
        <svg id="plot" className="container"></svg>
      </div>
    </div>
  );
};
export default EventPerformanceChart;
