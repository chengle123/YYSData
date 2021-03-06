<view class="container">
  <view class="header">
    <view class="cover">
      <image src="{{ header.cover }}"></image>
    </view>
    <view class="intro">
      <text class="name">{{ header.name }}</text>
      <view class="desc">{{ header.desc }}</view>
    </view>
  </view>
  <view class="list">
    <view class="list-item" qq:for="{{ herolist }}">
      <navigator url="../hero_detail/hero_detail?id={{ item.hero_id }}"></navigator>
      <view class="list-avatar">
        <image class="list-img" src="{{ item.hero_avatar }}"></image>
      </view>
      <view class="list-text">
        <text class="hero_name">{{ item.hero_name }}</text>
        <view qq:if="{{ item.isNew }}" class="new_tag">new</view>
      </view>
      <view class="list-icon">
        <image src="../../img/icon/arrow.svg"></image>
      </view>
    </view>
  </view>
</view>




