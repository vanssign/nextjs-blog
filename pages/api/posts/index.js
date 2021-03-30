import fire from "../../../config/fire-config";

export default (req, res) => {
        fire.firestore()
          .collection('blog')
          .onSnapshot(snap => {
            const blogs = snap.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            res.status(200).json(blogs);
          });
}