import React from 'react';
import Card from "@/components/global/Card";
import { Icon2fa, IconKey } from "@tabler/icons-react";
import Button from "@/components/global/Button";

const SecuritySettings = () => {
  return (
    <Card className="px-12 py-10">
      <h3 className="font-semibold mb-8">Security settings</h3>
      <div className="space-y-6">
        <div className="divide-y">
          <div className="flex items-center py-3">
            <IconKey/>
            <div className="px-4 flex-1">
              <h5>Change password</h5>
              <p className="text-[.95rem] opacity-70">
                Set a new password to protect your account
              </p>
            </div>
            <Button disabled variant="outlined" size="sm">Change</Button>
          </div>
          <div className="flex items-center py-3">
            <Icon2fa/>
            <div className="px-4 flex-1">
              <h5>Two factor authentication</h5>
              <p className="text-[.95rem] opacity-70">
                Add an extra layer of security to your account
              </p>
            </div>
            <Button disabled variant="outlined" size="sm">Enable</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SecuritySettings;
