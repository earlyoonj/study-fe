import './ChartBar.css';

function ChartBar(props) {
    const fillHeight = Math.round((props.value / props.max) * 100) + '%';

    return (
        <li className="chart-bar">
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                    style={{ height: fillHeight }}
                ></div>
            </div>
            <span className="chart-bar__label">{props.label}</span>
        </li>
    );
}

export default ChartBar;
