import React, { useState } from "react";
import { SectionWrapper, Card, Field, Input, PasswordInput, SectionTitle } from "./AdminComponents";
import { updateAccountPassword } from "../../Api/Api";
import Swal from "sweetalert2";

const SettingsEditor = () => {
  const [data, setData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    newEmail: JSON.parse(localStorage.getItem("admin_user") || "{}").email || "admin@example.com",
  });
  const [loading, setLoading] = useState(false);

  const set = (key, val) => setData((d) => ({ ...d, [key]: val }));

  const handleUpdate = async () => {
    if (data.newPassword && data.newPassword !== data.confirmPassword) {
      return Swal.fire("Error", "New passwords do not match", "error");
    }

    setLoading(true);
    try {
      await updateAccountPassword(data);
      Swal.fire("Success", "Account settings updated successfully", "success");
      setData({ ...data, currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err) {
      Swal.fire("Error", err.response?.data?.message || "Failed to update account", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper
      title="Account Settings"
      description="Update your admin login credentials and security settings."
      onSave={handleUpdate}
    >
      <Card>
        <SectionTitle>Admin Identity</SectionTitle>
        <Field label="Admin Email">
          <Input 
            value={data.newEmail} 
            onChange={(e) => set("newEmail", e.target.value)} 
            placeholder="admin@example.com"
          />
        </Field>
      </Card>

      <Card>
        <SectionTitle>Change Password</SectionTitle>
        <div className="space-y-4">
          <Field label="Current Password">
            <PasswordInput 
              value={data.currentPassword} 
              onChange={(e) => set("currentPassword", e.target.value)} 
              placeholder="••••••••"
            />
          </Field>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="New Password">
              <PasswordInput 
                value={data.newPassword} 
                onChange={(e) => set("newPassword", e.target.value)} 
                placeholder="New Password (optional)"
              />
            </Field>
            <Field label="Confirm New Password">
              <PasswordInput 
                value={data.confirmPassword} 
                onChange={(e) => set("confirmPassword", e.target.value)} 
                placeholder="Confirm New Password"
              />
            </Field>
          </div>
          <p className="text-xs text-base-content/40 italic">
            * Leave new password fields blank if you only want to change your email.
          </p>
        </div>
      </Card>
    </SectionWrapper>
  );
};

export default SettingsEditor;
