
Pod::Spec.new do |s|
  s.name         = "ReactNativeDynamicFont"
  s.version      = "1.0.2"
  s.summary      = "ReactNativeDynamicFont"
  s.description  = <<-DESC
                  ReactNativeDynamicFont
                   DESC
  s.homepage     = "https://github.com/ashrithks/react-native-dynamic-font"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "9.0"
  s.source       = { :git => "https://github.com/ashrithks/react-native-dynamic-font.git", :tag => "master" }
  s.source_files  = "*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  