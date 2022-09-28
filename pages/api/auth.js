export default function handler(req, res) {
  setTimeout(()=>{
    res.status(200).json({
      code: 75489,
      accessToken:
        "Ninza__eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..MVRzSkYuyeE1ydRU.9-Q33eWOrc_-BbNFdqML1O1YW9TP_0fxSmNF9S7x_DbBla8uGyLZwwLbmNTSp0IDOztHtV8nrFIU5u55MjPnsIxfmvo-8CnkbL4NsZkSwX6DFh",
    });
  }, 2000)
}
