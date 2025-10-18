import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
            <p className="text-muted-foreground">
              Manage your projects and workflows
            </p>
          </div>
          <Button>Create Project</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="p-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Project {i}</h3>
                <p className="text-sm text-muted-foreground">
                  This is a placeholder project description that will be replaced with real content.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-muted-foreground">
                    Updated 2 days ago
                  </span>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

