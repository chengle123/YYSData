<view class="container bg-{{ ming.ming_type }}">
  <view class="card">
    <image binderror="imgErr" src="http:{{ ming.img }}"></image>
    <text class="name">{{ ming.ming_name }}</text>
    <text class="grade">{{ grade_cn[ming.ming_grade] }}级铭文</text>
    <text class="des" qq:for="{{ ming.ming_des }}">{{ item }}</text>
  </view>
</view>