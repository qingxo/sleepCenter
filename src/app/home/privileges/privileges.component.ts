import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { DialogAccountComponent } from '../dialog-account';
import * as $ from 'jquery';

@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }
  tree = [
    {
      text: '我的工作',
      checked: true,
      children: [
        {
          text: '待处理异常',
          checked: true,
          children: [
            {
              text: '待处理异常',
              checked: true
            },
            {
              text: '待处理异常',
              checked: true
            }
          ]
        },
        {
          text: '数据上传提醒',
          checked: true,
          children: [
            {
              text: '详情',
              checked: true
            }
          ]
        },
        {
          text: '未审核情况',
          checked: true,
          children: [
            {
              text: '操作',
              checked: true
            }
          ]
        },
        {
          text: '生日提醒',
          checked: false
        }
      ]
    },
    {
      text: '异常监控',
      checked: true,
      children: [
        {
          text: '待处理异常',
          checked: true,
          children: [
            {
              text: '待处理异常',
              checked: true
            }
          ]
        },
        {
          text: '数据上传提醒',
          checked: true,
          children: [
            {
              text: '详情',
              checked: true
            }
          ]
        },
        {
          text: '未审核情况',
          checked: true,
          children: [
            {
              text: '操作',
              checked: true
            }
          ]
        },
        {
          text: '生日提醒',
          checked: false
        }
      ]
    },
    {
      text: '居民管理',
      checked: true,
      children: [
        {
          text: '待处理异常',
          checked: true,
          children: [
            {
              text: '待处理异常',
              checked: true
            }
          ]
        },
        {
          text: '数据上传提醒',
          checked: true,
          children: [
            {
              text: '详情',
              checked: true
            }
          ]
        },
        {
          text: '生日提醒',
          checked: false
        },
        {
          text: '未审核情况',
          checked: true,
          children: [
            {
              text: '操作',
              checked: true
            }
          ]
        }
      ]
    }
  ];
  showModal() {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogAccountComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <DialogAccountComponent>containerRef.createComponent(componentFatory).instance;
  }
  toggleLevel(e) {
    const $this = $(e.target);
    const $parent = $this.parent();
    if ($parent.hasClass('unfold')) {
      $parent.removeClass('unfold').addClass('fold');
    } else{
      $parent.removeClass('fold').addClass('unfold');
    }
  }
  changeCheckItem(item){
    console.log(item.checked);
    const child = item.children;
    for (let i = 0, len = child.length; i < len; i++){
      child[i].checked = item.checked;

      const grandChild = child[i].children;
      if (grandChild) {
        for (let j = 0, len = grandChild.length; j < len; j++){
          grandChild[j].checked = item.checked;
        }
      }
    }
  }
}
