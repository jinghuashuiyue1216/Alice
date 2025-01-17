'use client'
import { usePageContext } from '../Context'
import { style } from '../'
import { CloseCircleOutlined, Segmented, Sider } from '@/lib/Antd'

const segmentedOptions = [
  '数据', '样式',
]

export function SettingAside() {
  const {
    settingCollapsed,
    curComponent,
    setSettingCollapsed,
  }
        = usePageContext()
  return (
    <Sider
      className={style.settingAside}
      collapsed={settingCollapsed}
      width={300}
      collapsedWidth={0}
      style={{
        background: '#f7f8fa',
        borderLeft: '1px solid #e7ecef',
      }}
    >
      <div className='flex justify-between items-center  px-[20px] h-[40px] text-[12px]
       bg-[#ffffff]'
      >
        <span> {curComponent?.name}</span>
        <CloseCircleOutlined
          className='text-[18px]'
          onClick={() => setSettingCollapsed(true)}
        />
      </div>
      <Segmented
        block options={segmentedOptions} style={{
          borderTop: '1px solid #e7ecef',
          borderBottom: '1px solid #e7ecef',
        }}
      />
      <div className={style.wrap} />
    </Sider>
  )
}

export default SettingAside
