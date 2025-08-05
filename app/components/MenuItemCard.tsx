import { MenuItem } from "~/data/menu";

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {item.name}
        </h3>
        <p className="text-orange-500 font-bold text-lg mb-2">
          {item.price} ₸
        </p>
        <p className="text-gray-600 text-sm">
          {item.description}
        </p>
      </div>
      <div className="ml-4 flex-shrink-0">
        <img
          src="/placeholder-coffee.svg"
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
