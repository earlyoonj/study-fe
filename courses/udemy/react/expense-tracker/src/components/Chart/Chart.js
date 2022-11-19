import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
    const dataPoints = props.dataPoints;
    const values = dataPoints.map((dataPoint) => {
        return dataPoint.value;
    });
    const totalMaximum = Math.max(...values);

    return (
        <ol className="chart">
            {dataPoints.map((dataPoint) => {
                return (
                    <ChartBar
                        key={dataPoint.label}
                        label={dataPoint.label}
                        max={totalMaximum}
                        value={dataPoint.value}
                    />
                );
            })}
        </ol>
    );
}

export default Chart;
