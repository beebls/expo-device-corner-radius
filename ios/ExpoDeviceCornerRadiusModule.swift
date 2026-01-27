import ExpoModulesCore
import UIKit
import DeviceKit

public class ExpoDeviceCornerRadiusModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoDeviceCornerRadius")

    Function("getCornerRadius") {
      // The API to get this value is not public, so to ensure that this will be app store compatible we can just hardcode this instead
      let device = Device.current
      
      // Handle simulator by getting the simulated device
      let actualDevice: Device
      if device.isSimulator {
        actualDevice = device.realDevice
      } else {
        actualDevice = device
      }
      
      return self.cornerRadius(for: actualDevice)
    }
  }
  
  private func cornerRadius(for device: Device) -> Double {
    switch device {
    // iPhone 17 series
    case .iPhone17ProMax, .iPhone17Pro, .iPhoneAir, .iPhone17:
      return 62.0
      
    // iPhone 16 series
    case .iPhone16ProMax, .iPhone16Pro:
      return 62.0
    case .iPhone16Plus, .iPhone16:
      return 55.0
    case .iPhone16e:
      return 47.33
      
    // iPhone 15 series
    case .iPhone15ProMax, .iPhone15Pro, .iPhone15Plus, .iPhone15:
      return 55.0
      
    // iPhone 14 series
    case .iPhone14ProMax, .iPhone14Pro:
      return 55.0
    case .iPhone14Plus:
      return 53.33
    case .iPhone14:
      return 47.33
      
    // iPhone 13 series
    case .iPhone13ProMax:
      return 53.33
    case .iPhone13Pro, .iPhone13:
      return 47.33
    case .iPhone13Mini:
      return 44.0
      
    // iPhone 12 series
    case .iPhone12ProMax:
      return 53.33
    case .iPhone12Pro, .iPhone12:
      return 47.33
    case .iPhone12Mini:
      return 44.0
      
    // iPhone 11 series
    case .iPhone11ProMax, .iPhone11Pro:
      return 39.0
    case .iPhone11:
      return 41.5
      
    // iPhone X series
    case .iPhoneXSMax, .iPhoneXS, .iPhoneX:
      return 39.0
    case .iPhoneXR:
      return 41.5
      
    // All older iPhones have square screens (corner radius 0)
    default:
      return 0.0
    }
  }
}