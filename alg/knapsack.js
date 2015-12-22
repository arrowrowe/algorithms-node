'use strict';

const maxBy = require('../util/max-by');

const planPush = (plan, pack) => ({
  value: plan.value + pack.value,
  packs: plan.packs.concat([pack])
});

module.exports = packs => {
  let planner = function (weightTotal) {
    if (weightTotal <= 0) {
      return {
        value: 0,
        packs: []
      };
    }
    if (weightTotal in planner.plans) {
      return planner.plans[weightTotal];
    }
    return planner.plans[weightTotal] = maxBy(plan => plan.value, packs.filter(pack => pack.weight <= weightTotal).map(
      pack => planPush(planner(weightTotal - pack.weight), pack)
    ));
  };
  planner.plans = [];
  return planner;
};
