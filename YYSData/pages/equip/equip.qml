<view class="container"> 
  <scroll-view class="category-list" scroll-x="true">
    <view class="c-item" qq:for="{{ type }}" catchtap="toggle" data-type="{{ index }}">
      <text>{{ item }}</text>
    </view>
  </scroll-view>
  <view class="g-wrap grid-content">
    <view class="grid" qq:for="{{ equip }}">
      <navigator url="../hero_detail/hero_detail?js=ss&id={{ index }}&fl={{ currentType }}"></navigator>
      <image class="grid-item-img" src="{{ item.headImg }}"></image>
      <view class="grid-item-img-bg"></view>
      <view class="grid-item-name">{{ item.name }}</view>
    </view>
  </view>
  <ad unit-id="df60ecc2a91df64f5c25d5f612820981"></ad>
</view> 
