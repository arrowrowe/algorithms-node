/*
  # Monty Hall problem
  Q:
    There are r prizes in n doors.
    We can choose only one.
    The host open m other doors, among which s doors get prizes.
    Now, should we switch to a new choice?
    Assume that
      n > r > 0, m >= s >= 0, (everything has its meaning)
      r > s, n - r > m - s. (There are still unknown prizes and unknown empty doors left.)
  A:
    Let doorsCount = n, prizeCount = r,
        doorsOpenedCount = m, prizeRevealedCount = s,
    P1 = Prob( win | no-switch ) = r/n,
    P2 = Prob( win | switch ) = ((n-r)/n)*((r - s)/(n - m - 1))+(r/n)*((r-s-1)/(n-m-1))
                              = ((n-r)(r-s)+r(r-s-1))/(n(n-m-1))
                              = (nr-ns-r)/(n(n-m-1))
    Should Switch <=> P1 < P2
                  <=> 0 < P2 - P1 = (mr-ns)/(n(n-m-1))
                  <=> ns < mr
    In fact, if we
      let RealPrizeRatio = r/n, RevealedPrizeRatio = s/m,
    holds
      P2 - P1 = (RealPrizeRatio - RevealedPrizeRatio)m/(n-m-1),
      Should Switch <=> RevealedPrizeRatio < RealPrizeRatio.
 */

module.exports = (doorsCount, prizeCount, doorsOpenedCount, prizeRevealedCount) => doorsCount * prizeRevealedCount < doorsOpenedCount * prizeCount;
