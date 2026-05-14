import React from "react";
import { FiSave, FiRefreshCw, FiEye, FiEyeOff } from "react-icons/fi";
import Button from "../../Components/Button";

// ── Reusable field components ──────────────────────────────────────────────

export const SectionWrapper = ({
  title,
  description,
  onSave,
  onReset,
  children,
}) => (
  <div className="space-y-6">
    <div className="flex items-start justify-between gap-4 flex-wrap">
      <div>
        <h2 className="text-2xl font-extrabold">{title}</h2>
        {description && (
          <p className="text-sm text-base-content/50 mt-1">{description}</p>
        )}
      </div>
      <div className="flex gap-2">
        {onReset && (
          <button
            onClick={onReset}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-base-content/10 text-sm font-medium hover:bg-base-300 transition-all"
          >
            <FiRefreshCw size={14} /> Reset
          </button>
        )}
        {onSave && (
          <Button onClick={onSave}>
            <FiSave size={14} /> Save Changes
          </Button>
        )}
      </div>
    </div>
    <div className="space-y-4">{children}</div>
  </div>
);

export const Card = ({ children, className = "" }) => (
  <div
    className={`bg-base-100 rounded-3xl p-6 md:p-8 border border-base-content/5 shadow-sm ${className}`}
  >
    {children}
  </div>
);

export const Field = ({ label, children, hint }) => (
  <div className="space-y-1.5">
    <label className="text-sm font-bold text-base-content/70 ml-1">
      {label}
    </label>
    {children}
    {hint && <p className="text-xs text-base-content/30 ml-1 italic">{hint}</p>}
  </div>
);

export const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
  ...rest
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="input input-bordered w-full bg-base-100/50 rounded-2xl focus:border-spotify/50 transition-all"
    {...rest}
  />
);

export const PasswordInput = ({ value, onChange, placeholder, ...rest }) => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="relative group">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input input-bordered w-full bg-base-100/50 rounded-2xl pr-12 focus:border-spotify/50 transition-all"
        {...rest}
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/30 hover:text-spotify transition-colors"
      >
        {show ? <FiEyeOff size={18} /> : <FiEye size={18} />}
      </button>
    </div>
  );
};

export const Textarea = ({ value, onChange, placeholder, rows = 4 }) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={rows}
    className="textarea textarea-bordered w-full bg-base-100/50 rounded-2xl focus:border-spotify/50 transition-all"
  />
);

export const SectionTitle = ({ children }) => (
  <h3
    className="font-bold text-lg mb-6 flex items-center gap-2"
  >
    <div className="w-1.5 h-6 bg-spotify rounded-full" />
    {children}
  </h3>
);

export const RemoveBtn = ({ onClick }) => (
  <button
    onClick={onClick}
    className="btn btn-circle btn-sm btn-ghost text-red-500 hover:bg-red-500/10"
  >
    ✕
  </button>
);

export const AddBtn = ({ onClick, children = "Add New" }) => (
  <button
    onClick={onClick}
    className="btn btn-sm btn-ghost text-spotify gap-2 font-bold hover:bg-spotify/10"
  >
    <span>+</span> {children}
  </button>
);

export const ImageUpload = ({
  value,
  onChange,
  label = "Image URL or Upload",
}) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      onChange(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-3">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label}
      />
      <div className="flex items-center gap-3">
        <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-base-200/50 border border-dashed border-base-content/10 rounded-xl text-xs hover:border-spotify transition-all font-medium">
          📁 Upload from device
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        {value && (
          <img
            src={value}
            alt="Preview"
            className="w-12 h-12 rounded-xl object-cover border border-base-content/10"
          />
        )}
      </div>
    </div>
  );
};
