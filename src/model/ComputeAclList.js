/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ComputeAclCreateAclsResponse from './ComputeAclCreateAclsResponse';
import ComputeAclListMeta from './ComputeAclListMeta';

/**
 * The ComputeAclList model module.
 * @module model/ComputeAclList
 * @version 11.0.0
 */
class ComputeAclList {
    /**
     * Constructs a new <code>ComputeAclList</code>.
     * An example of an ACL list response.
     * @alias module:model/ComputeAclList
     */
    constructor() { 
        
        ComputeAclList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ComputeAclList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ComputeAclList} obj Optional instance to populate.
     * @return {module:model/ComputeAclList} The populated <code>ComputeAclList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComputeAclList();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ComputeAclCreateAclsResponse]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ComputeAclListMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ComputeAclCreateAclsResponse>} data
 */
ComputeAclList.prototype['data'] = undefined;

/**
 * @member {module:model/ComputeAclListMeta} meta
 */
ComputeAclList.prototype['meta'] = undefined;






export default ComputeAclList;

