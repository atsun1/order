# order

            let list = this.dataList.concat(res.datas.voucher_list)
						let seen = {}
						let newlist = []
							for(var i=0; i<list.length; i++){
								var txt = list[i].goods_name
								if(seen[txt]){
									console.log('重复了')
								}else{
									seen[txt] = true;
									console.log('没出现过')
									newlist.push(list[i])
								}
							}
