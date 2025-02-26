import { HttpService } from '@nestjs/axios';
import { InternalServerErrorException } from '@nestjs/common';
import { Response } from 'express';
import { lastValueFrom } from 'rxjs';

export const requestData = {
  "context": {
      "domain": "dsep:courses",
      "version": "1.0.0",
      "action": "search",
      "bap_id": "dsep-protocol.becknprotocol.io",
      "bap_uri": "https://dsep-protocol-network.becknprotocol.io/",
      "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
      "message_id": "7db91181-718f-4720-83de-88e36e9f854e",
      "ttl": "PT10M",
      "timestamp": "2023-02-22T10:30:18.145Z"
  },
  "responses": [
      {
          "context": {
              "domain": "dsep:courses",
              "version": "1.0.0",
              "action": "on_search",
              "bap_id": "dsep-protocol.becknprotocol.io",
              "bap_uri": "https://dsep-protocol-network.becknprotocol.io/",
              "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
              "message_id": "7db91181-718f-4720-83de-88e36e9f854e",
              "ttl": "PT10M",
              "timestamp": "2023-02-22T10:30:18.145Z",
              "bpp_id": "bpp.dsep.samagra.io",
              "bpp_uri": "https://bpp.dsep.samagra.io"
          },
          "message": {
              "catalog": {
                  "descriptor": {
                      "name": "Catalog for undefined"
                  },
                  "providers": [
                      {
                          "id": "NCERT",
                          "descriptor": {
                              "name": "NCERT"
                          },
                          "categories": [
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              }
                          ],
                          "items": [
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMjk=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMjk=",
                                  "descriptor": {
                                      "name": "Accountancy XI Part-I",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "3",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Prof. Shipra Vaidya"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "DESS, NCERT, New Delhi"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc29/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzA=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzA=",
                                  "descriptor": {
                                      "name": "Biology XI Part-I",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc30/biology01.jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "1",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Dr. Pushpalatha"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "DESM, NCERT, New Delhi"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc30/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzE=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzE=",
                                  "descriptor": {
                                      "name": "Biology XI Part-II",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc31/biology02.jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "0",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Dr. Pushpalatha"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "DESM, NCERT, New Delhi"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc31/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzI=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzI=",
                                  "descriptor": {
                                      "name": "Biology XII Part-I",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc32/Biology03copy2%20(1).jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "0",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Prof. Animesh Mohapatra"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "DESM, RIE, Bhubaneswar"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc32/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzM=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzM=",
                                  "descriptor": {
                                      "name": "Business Studies XI Part-I",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc33/businessstudies01.jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "2",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Dr. Punnam Veeraiah"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "RIE Campus, Shyamla Hills, Bhopal"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc33/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzQ=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzQ=",
                                  "descriptor": {
                                      "name": "Business Studies XII Part-I",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc34/businessstudies03.jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "0",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Dr. Punnam Veeraiah"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "RIE Campus, Shyamla Hills, Bhopal"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc34/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzU=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzU=",
                                  "descriptor": {
                                      "name": "Chemistry XI Part-I",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc35/chemistry01-copy2.jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "0",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Prof R. K. Parashar"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "DESM, NIE, NCERT, New Delhi"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc35/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzY=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzY=",
                                  "descriptor": {
                                      "name": "Chemistry XI Part-II",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc36/chemistry02.jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "5",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Prof. R.K. Parashar"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "DESM, NCERT, New Delhi"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc36/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzc=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzc=",
                                  "descriptor": {
                                      "name": "Chemistry XII Part-I",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc37/chemistry03.jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "1",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Prof R. K. Parashar"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "DESM, NIE, NCERT, New Delhi"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc37/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzg=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzg=",
                                  "descriptor": {
                                      "name": "Economic XI Part-I",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc38/economics01.jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "1",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Dr. Neeraja Rashmi"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "DESS, NCERT, New Delhi"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc38/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              }
                          ]
                      }
                  ]
              }
          }
      },
      {
          "context": {
              "domain": "dsep:courses",
              "version": "1.0.0",
              "action": "on_search",
              "bap_id": "dsep-protocol.becknprotocol.io",
              "bap_uri": "https://dsep-protocol-network.becknprotocol.io/",
              "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
              "message_id": "7db91181-718f-4720-83de-88e36e9f854e",
              "ttl": "PT10M",
              "timestamp": "2023-02-22T10:30:18.145Z",
              "bpp_id": "bpp.dsep.samagra.io",
              "bpp_uri": "https://bpp.dsep.samagra.io"
          },
          "message": {
              "catalog": {
                  "descriptor": {
                      "name": "Catalog for undefined"
                  },
                  "providers": [
                      {
                          "id": "NCERT",
                          "descriptor": {
                              "name": "NCERT"
                          },
                          "categories": [
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              },
                              {
                                  "id": "SCHOOL",
                                  "parent_category_id": "SCHOOL",
                                  "descriptor": {
                                      "name": "SCHOOL"
                                  }
                              }
                          ],
                          "items": [
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMjk=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMjk=",
                                  "descriptor": {
                                      "name": "Accountancy XI Part-I",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "3",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Prof. Shipra Vaidya"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "DESS, NCERT, New Delhi"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc29/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzA=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzA=",
                                  "descriptor": {
                                      "name": "Biology XI Part-I",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc30/biology01.jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "4",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Dr. Pushpalatha"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "DESM, NCERT, New Delhi"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc30/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzE=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzE=",
                                  "descriptor": {
                                      "name": "Biology XI Part-II",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc31/biology02.jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "4",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Dr. Pushpalatha"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "DESM, NCERT, New Delhi"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc31/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzI=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzI=",
                                  "descriptor": {
                                      "name": "Biology XII Part-I",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc32/Biology03copy2%20(1).jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "2",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Prof. Animesh Mohapatra"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "DESM, RIE, Bhubaneswar"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc32/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzM=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzM=",
                                  "descriptor": {
                                      "name": "Business Studies XI Part-I",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc33/businessstudies01.jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "2",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Dr. Punnam Veeraiah"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "RIE Campus, Shyamla Hills, Bhopal"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc33/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzQ=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzQ=",
                                  "descriptor": {
                                      "name": "Business Studies XII Part-I",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc34/businessstudies03.jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "5",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Dr. Punnam Veeraiah"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "RIE Campus, Shyamla Hills, Bhopal"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc34/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzU=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzU=",
                                  "descriptor": {
                                      "name": "Chemistry XI Part-I",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc35/chemistry01-copy2.jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "4",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Prof R. K. Parashar"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "DESM, NIE, NCERT, New Delhi"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc35/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzY=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzY=",
                                  "descriptor": {
                                      "name": "Chemistry XI Part-II",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc36/chemistry02.jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "0",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Prof. R.K. Parashar"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "DESM, NCERT, New Delhi"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc36/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzc=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzc=",
                                  "descriptor": {
                                      "name": "Chemistry XII Part-I",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc37/chemistry03.jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "1",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Prof R. K. Parashar"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "DESM, NIE, NCERT, New Delhi"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc37/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              },
                              {
                                  "id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzg=",
                                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMzg=",
                                  "descriptor": {
                                      "name": "Economic XI Part-I",
                                      "long_desc": "",
                                      "images": [
                                          {
                                              "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc38/economics01.jpg"
                                          }
                                      ]
                                  },
                                  "price": {
                                      "currency": "INR",
                                      "value": "0"
                                  },
                                  "category_id": "SCHOOL",
                                  "recommended": false,
                                  "time": {
                                      "label": "Course Schedule",
                                      "duration": "P24W",
                                      "range": {
                                          "start": "2022-11-01T18:29:00.000000Z",
                                          "end": "2023-03-31T18:29:00.000000Z"
                                      }
                                  },
                                  "rating": "4",
                                  "tags": [
                                      {
                                          "descriptor": {
                                              "name": "courseInfo"
                                          },
                                          "list": [
                                              {
                                                  "descriptor": {
                                                      "name": "credits"
                                                  },
                                                  "value": "null"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "instructors"
                                                  },
                                                  "value": "Dr. Neeraja Rashmi"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "offeringInstitue"
                                                  },
                                                  "value": "DESS, NCERT, New Delhi"
                                              },
                                              {
                                                  "descriptor": {
                                                      "name": "url"
                                                  },
                                                  "value": "https://onlinecourses.swayam2.ac.in/nce22_sc38/preview"
                                              },
                                              {
                                                  "decsriptor": {
                                                      "name": "enrollmentEndDate"
                                                  },
                                                  "value": "2023-02-28T18:29:00.000000Z"
                                              }
                                          ],
                                          "display": true
                                      }
                                  ],
                                  "rateable": false
                              }
                          ]
                      }
                  ]
              }
          }
      }
  ]
};

const requestForwarder = async (
  url: string,
  reqData: any,
  httpService: HttpService,
) => {
  try {
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        random_header: 'hey there',
      },
      withCredentials: true,
      mode: 'cors',
    };
    console.log('calling request forwarder');
    return await lastValueFrom(httpService.post(url, reqData, requestOptions));
  } catch (err) {
    console.log('error in request forwarder: ', err);
    return new InternalServerErrorException(err);
  }
};

const sendAcknowledgement = (res: Response, ack: string) => {
  res.status(200).json({
    message: {
      ack: {
        status: ack,
      },
    },
  });
};

export { requestForwarder, sendAcknowledgement };
