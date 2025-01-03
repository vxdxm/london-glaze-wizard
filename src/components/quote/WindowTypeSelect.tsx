import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface WindowTypeSelectProps {
  onValueChange: (value: string) => void;
}

const WindowTypeSelect = ({ onValueChange }: WindowTypeSelectProps) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Window Type</label>
      <Select onValueChange={onValueChange} required>
        <SelectTrigger className="hover:bg-white hover:bg-opacity-100">
          <SelectValue placeholder="Select window type" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="sash">Sash Windows</SelectItem>
          <SelectItem value="casement">Casement Windows</SelectItem>
          <SelectItem value="bay">Bay Windows</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default WindowTypeSelect;