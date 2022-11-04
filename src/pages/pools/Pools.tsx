import React from "react";
import PoolRow from "../../components/pool-row/PoolRow";
import "./pools.scss";

function Pools() {
  return (
    <div className="pool-page">
      <div className="pool-table">
        <div className="pool-table-header">
          <div className="table-head pool">Pool</div>
          <div className="table-head apy">APY</div>
          <div className="table-head tvl">TVL</div>
          <div className="table-head apr">Yield (APR)</div>
          <div className="table-head strategy">
            Strategy
          </div>
          <div className="table-head controls"></div>
        </div>
        <PoolRow />
        <PoolRow />
        <PoolRow />
        <PoolRow />
      </div>
    </div>
  );
}

export default Pools;
