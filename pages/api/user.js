export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(()=>{
        res.status(200).json({
          id: 75489,
          name: "Tanvir Ahmed",
        })
        resolve();
      }, 2000)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error })
      resolve()
    }
  })
}
