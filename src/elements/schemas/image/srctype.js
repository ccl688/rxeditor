import {OptionFragment} from "../option-fragment"

class ImageSrcType extends OptionFragment{
  constructor(){
    super()
    this.schema = {
      label:'Href',
      widget:'OpTextField',
      group:'sourceOptions',
      defaultValue:'',
    }

    this.fieldName = 'imageSrcType'
  }

  copyMeta(from, to){
    to[this.fieldName] = from[this.fieldName]
  }

  metaToModel(model, meta){
    let metaFragment = meta[this.fieldName]
    model.attributes['type'] = metaFragment
  }
}

var addonImageSrcType = (node, groupName)=>{
  let imageSrcType = new ImageSrcType
  imageSrcType.addon(node, groupName)
  return imageSrcType
}

export {addonImageSrcType}

