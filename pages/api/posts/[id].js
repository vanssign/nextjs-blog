import fire from "../../../config/fire-config";

export default function handler(req, res) {
    const { id } = req.query
    fire.firestore()
        .collection('blog')
        .doc(id)
        .get()
        .then(blog => {
            res.json(blog.data());
        })
        .catch(err=>res.json(err))
  }