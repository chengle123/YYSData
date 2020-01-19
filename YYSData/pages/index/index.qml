<view class="container">
  <view class="section slider-container">
    <view class="section-title">主角</view>
    <scroll-view class="g-slider hero-slider" scroll-x="true">
      <view class="g-slider-item" qq:for="{{ freehero }}">
        <navigator url="../hero_detail/hero_detail?js=zj&id={{ item.id }}"></navigator>
        <view class="avatar">
          <image src="{{ item.img }}"></image>
        </view>
        <text>{{ item.name }}</text>
      </view>
    </scroll-view>
  </view>
  <view class="section g-wrap">
    <view class="section-title">分类</view>
    <view class="grid-wrp">
      <view class="grid-row">
        <view class="grid-item">
          <navigator url="../equip/equip"></navigator>
          <text>式神</text>
          <image src="../../img/role/tank.png"></image>
        </view>
        <view class="grid-item">
          <navigator url=""></navigator>
          <text>御魂(暂未开放)</text>
          <image src="../../img/role/warrior.png"></image>
        </view>
        <view class="grid-item">
          <navigator url=""></navigator>
          <text>(暂未开放)</text>
          <image src="../../img/role/assassin.png"></image>
        </view>
      </view>
    </view>
  </view>
  <!--<view class="section g-wrap">
    <view class="section-title">新手攻略</view>
    <view class="article-list">
      <view class="article-list-item">
        <navigator url="../terminology/terminology"></navigator>
        <text>电竞专业术语宝典</text>
        <image src="../../img/article/jargon.png"></image>
      </view>
    </view>
  </view>
  <view class="about">
  </view>-->
</view>