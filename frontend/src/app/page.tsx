import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground">
            Welcome to your dashboard
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6">
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-medium text-muted-foreground">
                Total Projects
              </span>
              <span className="text-3xl font-bold">12</span>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-medium text-muted-foreground">
                Active Tasks
              </span>
              <span className="text-3xl font-bold">24</span>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-medium text-muted-foreground">
                Team Members
              </span>
              <span className="text-3xl font-bold">8</span>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-medium text-muted-foreground">
                Completed
              </span>
              <span className="text-3xl font-bold">156</span>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="mb-4 text-xl font-semibold">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="font-medium">Project Alpha Updated</p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="font-medium">New Team Member Added</p>
                <p className="text-sm text-muted-foreground">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Document Uploaded</p>
                <p className="text-sm text-muted-foreground">1 day ago</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
