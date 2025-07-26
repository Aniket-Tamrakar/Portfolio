"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaRegSquareFull } from "react-icons/fa6";
import { IoTriangleOutline } from "react-icons/io5";
import { RiCloseLargeLine } from "react-icons/ri";

export default function ReorderingShapes() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 2000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-rows-2 grid-cols-2 gap-3 mt-8">
        {order.map(({ id, Component }) => (
          <motion.div
            key={id} // Use unique key
            layout
            transition={spring}
            className="flex justify-center items-center"
          >
            <Component size={30} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Each icon is paired with a unique id
const initialOrder = [
  { id: "triangle", Component: IoTriangleOutline },
  { id: "square", Component: FaRegSquareFull },
  { id: "circle", Component: FaRegCircle },
  { id: "cross", Component: RiCloseLargeLine },

];

/**
 * ==============   Utils   ================
 */
function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

/**
 * ==============   Animation Config   ================
 */

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};
