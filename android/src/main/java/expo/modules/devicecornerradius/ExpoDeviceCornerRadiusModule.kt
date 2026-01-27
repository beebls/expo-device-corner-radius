package expo.modules.devicecornerradius

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import android.os.Build
import android.view.WindowInsets
import android.view.RoundedCorner

class ExpoDeviceCornerRadiusModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoDeviceCornerRadius")

    Function("getCornerRadius") {
      // Result is provided in raw pixel values, so here, we convert it to points, which is what react native uses
      val density = activity.resources.displayMetrics.density
      cornerRadius / density
    }
  }

  private val cornerRadius: Int
    get() {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) { // API 31
        val insets: WindowInsets? = activity.window.decorView.rootWindowInsets
        if (insets != null) {
          fun rc(pos: Int) =
            insets.getRoundedCorner(pos)?.radius ?: 0

          val lowestRadiusOfAllCorners = listOf(
            rc(RoundedCorner.POSITION_TOP_LEFT),
            rc(RoundedCorner.POSITION_TOP_RIGHT),
            rc(RoundedCorner.POSITION_BOTTOM_LEFT),
            rc(RoundedCorner.POSITION_BOTTOM_RIGHT)
          ).minOrNull()

          return lowestRadiusOfAllCorners ?: 0
        }
      }
      return 0
    }

  private val activity
    get() = requireNotNull(appContext.currentActivity)
}
