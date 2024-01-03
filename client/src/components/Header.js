import { motion } from "framer-motion";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <motion.h1
              animate={{
                scale: [1, 2, 2, 1, 1],
              }}
            >
              Atuma
            </motion.h1>
            <motion.div
              initial={{ y: -250 }}
              animate={{ y: -10 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
            >
              ProjectMgmt
            </motion.div>
          </div>
        </a>
      </div>
    </nav>
  );
}
