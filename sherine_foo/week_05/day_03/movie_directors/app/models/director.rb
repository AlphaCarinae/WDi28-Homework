# == Schema Information
#
# Table name: directors
#
#  id          :bigint(8)        not null, primary key
#  name        :text
#  nationality :text
#  dob         :integer
#  image       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Director < ApplicationRecord
  has_many :movies
end
