<view class="container" style="background: {{ bg }}">
  <view class="card">
    <text class="name">{{ name }}</text>
    <text qq:if="{{ spell }}" class="spell">[{{ spell }}]</text>
    <text class="des">{{ des }}</text>
  </view>
</view>