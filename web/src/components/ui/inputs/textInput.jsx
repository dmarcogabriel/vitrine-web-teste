import {Label} from './label';
import {Input} from './input';

export function TextInput({name, label, error, ...props}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name} className="text-gray-500">
        {label}
      </Label>
      <Input id={name} name={name} {...props} />
      <p className="text-xs text-destructive">{error}</p>
    </div>
  );
}
