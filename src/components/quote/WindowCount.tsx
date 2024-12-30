import { Input } from "@/components/ui/input";

interface WindowCountProps {
  count: number;
  onCountChange: (count: number) => void;
}

const WindowCount = ({ count, onCountChange }: WindowCountProps) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Number of Windows</label>
      <Input
        type="number"
        min="1"
        max="10"
        value={count}
        onChange={(e) => {
          const value = e.target.value === "" ? 1 : parseInt(e.target.value);
          if (!isNaN(value) && value >= 1 && value <= 10) {
            onCountChange(value);
          }
        }}
        required
      />
    </div>
  );
};

export default WindowCount;