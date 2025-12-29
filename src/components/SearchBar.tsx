interface Props {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Search recipes..."
      className="w-full p-2 rounded-lg border"
    />
  )
}
