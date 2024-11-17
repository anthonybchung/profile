require "test_helper"

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get static_pages_index_url
    assert_response :success
  end

  test "should get learning" do
    get static_pages_learning_url
    assert_response :success
  end

  test "should get aboutme" do
    get static_pages_aboutme_url
    assert_response :success
  end
end
