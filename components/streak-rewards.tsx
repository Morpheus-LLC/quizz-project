import { Flame } from "lucide-react"

export function StreakRewards() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Streak Rewards</h2>
          <p className="text-gray-600">Keep your streak going and earn amazing rewards</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="bg-blue-600 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">365</span>
              <span className="text-xs">days streak</span>
            </div>
            <Flame className="absolute -top-2 -right-2 h-8 w-8 text-orange-500" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg border p-6 shadow-sm mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="h-6 w-6 text-orange-500" />
            <h3 className="text-xl font-bold">365-Day Streak Special</h3>
          </div>
          <p className="text-gray-600 mb-4">
            1000 children with a streak of 365 days will receive free gifts every month!
          </p>
          <p className="text-sm text-gray-500">
            Keep playing daily to maintain your streak and qualify for this exclusive reward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border p-6 shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Flame className="h-10 w-10 text-orange-500" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">7-Day Streak</h3>
            <p className="text-gray-600 text-center">Earn bonus points and special badges for your profile</p>
          </div>

          <div className="bg-white rounded-lg border p-6 shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Flame className="h-10 w-10 text-orange-500" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">30-Day Streak</h3>
            <p className="text-gray-600 text-center">Unlock exclusive monthly rewards and digital certificates</p>
          </div>

          <div className="bg-white rounded-lg border p-6 shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Flame className="h-10 w-10 text-orange-500" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">100-Day Streak</h3>
            <p className="text-gray-600 text-center">Receive physical rewards and enter special prize drawings</p>
          </div>
        </div>
      </div>
    </section>
  )
}
