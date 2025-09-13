import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-center p-4 bg-gray-100 text-sm text-gray-600">
      <p>
        © 2025 All Rights Reserved | Made with&nbsp;
        <Heart className="text-danger" fill="red" size={16} />
        &nbsp;by <strong>Abdelrahman Elgebaly</strong>
      </p>
    </footer>
  );
}
