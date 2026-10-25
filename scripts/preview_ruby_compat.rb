# Apple's Ruby can reference the unversioned SDK after that SDK has moved
# to a newer Ruby architecture. Use an installed SDK with matching headers.
require 'rbconfig'

if RUBY_PLATFORM.include?('darwin') &&
   !File.file?(File.join(RbConfig::CONFIG['rubyarchhdrdir'], 'ruby/config.h'))
  arch = RbConfig::CONFIG['arch']
  header = Dir.glob(
    '/Library/Developer/CommandLineTools/SDKs/*.sdk/' \
    'System/Library/Frameworks/Ruby.framework/Versions/*/' \
    "usr/include/ruby-*/#{arch}/ruby/config.h"
  ).sort.last

  if header
    sdk = header.split('/System/Library/Frameworks/').first
    [RbConfig::CONFIG, RbConfig::MAKEFILE_CONFIG].each do |config|
      config.each do |key, value|
        next unless value.is_a?(String)
        config[key] = value.gsub(
          '/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk', sdk
        )
      end
    end
  end
end
