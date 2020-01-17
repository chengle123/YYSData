<view qq:if="{{ js === 'zj' }}">
  <view class="header">
    <view class="cover">
      <image src="{{ hero.inception }}" mode="widthFix"></image>
    </view>
    <view class="filter"></view>
    <view class="hero-title">
      <view class="role">{{ type[js] }}</view>
      <view class="name">{{ hero.name }}</view>
    </view>
  </view>

  <view class="container">

    <view class="section attr-list">
      <view class="attr-item">
        <text class="attr-desc">{{ hero.desc }}</text>
      </view>
    </view>

    <view class="hero-nav">
      <view class="nav-item {{ nav_index == 0 ? 'nav-current' : '' }}" catchtap="toggleNav" data-tabindex="0">技能</view>
      <view class="nav-item {{ nav_index == 1 ? 'nav-current' : '' }}" catchtap="toggleNav" data-tabindex="1">皮肤</view>
    </view>

    <view class="tab-content">
      <!--技能加点-->
      <view class="tab-content-item" hidden="{{ nav_index != 0 }}">
        <!--介绍-->
        <view class="section skills">
          <view class="section-title">技能介绍</view>
          <view class="skill-tab">
            <scroll-view class="g-slider hero-slider" scroll-x="true">
              <view class="g-slider-item skill-tab-item {{ index == skill_index ? 'current' : '' }}" qq:for="{{ hero.jnText }}" data-id="{{ index }}" catchtap="toggle">
                <image src="{{ item.img }}"></image>
              </view>
            </scroll-view>
          </view>
          <view class="skill-content">
            <view class="skill-content-item">
              <view class="skill-content-header">
                <view class="skill-name">{{ hero.jnText[skill_index].name }}</view>
                <view class="skill-value">{{ hero.jnText[skill_index].desc }}</view>
              </view>
              <view class="skill-desc" qq:for="{{ hero.jnText[skill_index].lv }}">{{ item }}</view>
            </view>
          </view> 
        </view>
        <!--召唤师技能-->
        <!--<view class="section summoner">
          <view class="section-title">召唤师技能</view>
          <view class="slist">
            <view class="sitem" qq:for="{{ hero.summoner }}">
              <image src="{{ item.img }}"></image>
              <view class="sname">{{ item.name }}</view>
            </view>
          </view>
        </view>-->
      </view>
      <!--铭文出装-->
      <view class="tab-content-item" hidden="{{ nav_index != 1 }}">
        <!--出装-->
        <view class="section slider-container equip">
          <view class="section-title">皮肤</view>
          <!--<view class="equip-build">
            <view class="equip-tlt">顺风出装</view>
            <scroll-view class="g-slider equip-slider" scroll-x="true">
              <view class="g-slider-item" qq:for="{{ hero.equip['顺风出装'].data }}">
                <navigator url="../equip_detail/equip_detail?id={{ item.id }}"></navigator>
                <view class="avatar">
                  <image src="{{ item.img }}"></image>
                </view>
                <text>{{ item.name }}</text>
              </view>
            </scroll-view>
            <view class="prompt">{{ hero.equip['顺风出装'].tips }}</view>
          </view>-->
          <view class="header" qq:for="{{ hero.pf }}" data-id="{{ index }}">
            <view class="cover">
              <image src="{{ item.img }}" mode="widthFix"></image>
            </view>
            <view class="filter"></view>
            <view class="hero-title">
              <view class="name">{{ item.name }}</view>
            </view>
          </view>
        </view>
        <!--铭文-->
        <!--<view class="section rune">
          <view class="section-title">铭文搭配</view>
          <view class="slist">
            <view class="sitem" qq:for="{{ hero.ming }}">
              <image src="{{ item.img }}"></image>
              <view class="sname">{{ item.name }}</view>
              <view class="sdesc" qq:for="{{ item.des }}">{{ item }}</view>
            </view>
          </view>
        </view>-->
      </view>
    </view>
  </view>
</view>

<view qq:if="{{ js === 'ss' }}">
  <scroll-view class="" scroll-x="true" style="display:flex; white-space:nowrap;">
    <view class="header" style="display:inline-block; width:100%;">
      <view class="cover">
        <image src="{{ hero.beforeImg }}" mode="widthFix"></image>
      </view>
      <view class="filter"></view>
      <view class="hero-title">
        <view class="role">{{ hero.level }}</view>
        <view class="name">{{ hero.name }}</view>
      </view>
    </view>
    <view class="header" style="display:inline-block; width:100%;" qq:if="{{ hero.afterImg }}">
      <view class="cover">
        <image src="{{ hero.afterImg }}" mode="widthFix"></image>
      </view>
      <view class="filter"></view>
      <view class="hero-title">
        <view class="role">觉醒</view>
        <view class="name">{{ hero.name }}</view>
      </view>
    </view>
  </scroll-view>

  <view class="container">

    <view class="section attr-list">
      <view class="attr-item" qq:for="{{ hero.story }}" qq:if="{{ hero.story }}">
        <view class="section-title">传记 {{ index+1 }}</view>
        <text class="attr-desc">{{ item }}</text>
      </view>
      <view class="attr-item" qq:else>
        <text class="attr-desc">该式神没有传记</text>
      </view>
    </view>

    <view class="hero-nav">
      <view style="margin:0;" class="nav-item {{ nav_index == 0 ? 'nav-current' : '' }}" catchtap="toggleNav" data-tabindex="0">技能</view>
      <view style="margin:0;" class="nav-item {{ nav_index == 2 ? 'nav-current' : '' }}" catchtap="toggleNav" data-tabindex="2">觉醒</view>
      <view style="margin:0;" class="nav-item {{ nav_index == 1 ? 'nav-current' : '' }}" catchtap="toggleNav" data-tabindex="1">皮肤</view>
    </view>

    <view class="tab-content">
      <!--技能加点-->
      <view class="tab-content-item" hidden="{{ nav_index != 0 }}">
        <!--介绍-->
        <view class="section skills">
          <view class="section-title">技能介绍</view>
          <view class="skill-tab">
            <scroll-view class="g-slider hero-slider" scroll-x="true">
              <view class="g-slider-item skill-tab-item {{ index == skill_index ? 'current' : '' }}" qq:for="{{ hero.skill }}" data-id="{{ index }}" catchtap="toggle">
                <image src="{{ item.img }}"></image>
              </view>
            </scroll-view>
          </view>
          <view class="skill-content">
            <view class="skill-content-item">
              <view class="skill-content-header">
                <view class="skill-name">{{ hero.skill[skill_index].name }}</view>
                <view class="skill-value">{{ hero.skill[skill_index].normaldesc }}</view>
              </view>
              <view class="skill-desc" qq:for="{{ hero.skill[skill_index].desc }}">{{ item }}</view>
            </view>
          </view> 
        </view>
        <!--召唤师技能-->
        <view class="section summoner">
          <view class="section-title">属性</view>
          <view class="slist">
            <view class="sitem" qq:for="{{ hero.attr.sx }}">
              <view class="sname">{{ item.name }}</view>
              <view class="sname snameVlue">
                <view class="level level{{ hero.attr.score[item.key] }}"></view>
                <view >
                  (
                    {{ item.value }}
                    <i qq:if="{{ item.key === 'critPower' || item.key === 'debuffEnhance' || item.key === 'debuffResist' }}">%</i>
                  )
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <!--技能加点-->
      <view class="tab-content-item" hidden="{{ nav_index != 2 }}">
        <view class="header" style="height:150rpx" qq:if="{{ !hero.afterImg }}">
          <view class="hero-title">
            <view class="name">该式神不能觉醒</view>
          </view>
        </view>
        <view qq:else>
          <!--介绍-->
          <view class="section skills">
            <view class="section-title">觉醒技能介绍</view>
            <view class="skill-tab" qq:if="{{ hero.JXSkill[0].img }}">
              <scroll-view class="g-slider hero-slider" scroll-x="true">
                <view class="g-slider-item skill-tab-item {{ index == skill_index ? 'current' : '' }}" qq:for="{{ hero.JXSkill }}" data-id="{{ index }}" catchtap="toggle">
                  <image src="{{ item.img }}"></image>
                </view>
              </scroll-view>
            </view>
            <view class="skill-content" qq:if="{{ hero.JXSkill[skill_index].name }}">
              <view class="skill-content-item">
                <view class="skill-content-header">
                  <view class="skill-name">{{ hero.skill[skill_index].name }}</view>
                  <view class="skill-value">{{ hero.skill[skill_index].normaldesc }}</view>
                </view>
                <view class="skill-desc" qq:for="{{ hero.JXSkill[skill_index].desc }}" >{{ item }}</view>
              </view>
            </view> 
            <view class="skill-content" qq:else>
              <view class="skill-content-item">
                <view class="skill-desc">{{ hero.JXSkill[skill_index].desc }}</view>
              </view>
            </view> 
          </view>
          <!--召唤师技能-->
          <view class="section summoner">
            <view class="section-title">属性</view>
            <view class="slist">
              <view class="sitem" qq:for="{{ hero.JXattr.sx }}">
                <view class="sname">{{ item.name }}</view>
                <view class="sname snameVlue">
                  <view class="level level{{ hero.JXattr.score[item.key] }}"></view>
                  <view style="color:#ca0000;display:inline-block; margin-right:5px;">+{{ item.value - hero.attr.sx[index].value }}{{ item.key === 'critPower' || item.key === 'debuffEnhance' || item.key === 'debuffResist' ? '%' : '' }}</view>
                  <view style="display:inline-block;">
                    (
                      {{ item.value }}
                      <i qq:if="{{ item.key === 'critPower' || item.key === 'debuffEnhance' || item.key === 'debuffResist' }}">%</i>
                    )
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <!--铭文出装-->
      <view class="tab-content-item" hidden="{{ nav_index != 1 }}">
        <!--出装-->
        <view class="section slider-container equip">
          <view class="section-title">皮肤</view>
          <!--<view class="equip-build">
            <view class="equip-tlt">顺风出装</view>
            <scroll-view class="g-slider equip-slider" scroll-x="true">
              <view class="g-slider-item" qq:for="{{ hero.equip['顺风出装'].data }}">
                <navigator url="../equip_detail/equip_detail?id={{ item.id }}"></navigator>
                <view class="avatar">
                  <image src="{{ item.img }}"></image>
                </view>
                <text>{{ item.name }}</text>
              </view>
            </scroll-view>
            <view class="prompt">{{ hero.equip['顺风出装'].tips }}</view>
          </view>-->
          <view class="header" qq:for="{{ hero.skin }}" data-id="{{ index }}" qq:if="{{ hero.skin }}">
            <view class="cover">
              <image src="{{ item.img }}" mode="widthFix"></image>
            </view>
            <view class="filter"></view>
            <view class="hero-title">
              <view class="name">{{ item.name }}</view>
            </view>
          </view>
          <view class="header" style="height:150rpx" qq:if="{{ !hero.skin }}">
            <view class="hero-title">
              <view class="name">该式神没有皮肤</view>
            </view>
          </view>
        </view>
        <!--铭文-->
        <!--<view class="section rune">
          <view class="section-title">铭文搭配</view>
          <view class="slist">
            <view class="sitem" qq:for="{{ hero.ming }}">
              <image src="{{ item.img }}"></image>
              <view class="sname">{{ item.name }}</view>
              <view class="sdesc" qq:for="{{ item.des }}">{{ item }}</view>
            </view>
          </view>
        </view>-->
      </view>
    </view>
  </view>
</view>