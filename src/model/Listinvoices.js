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
import Invoice from './Invoice';
import Metadata from './Metadata';

/**
 * The Listinvoices model module.
 * @module model/Listinvoices
 * @version 12.1.0
 */
class Listinvoices {
    /**
     * Constructs a new <code>Listinvoices</code>.
     * @alias module:model/Listinvoices
     */
    constructor() { 
        
        Listinvoices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Listinvoices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Listinvoices} obj Optional instance to populate.
     * @return {module:model/Listinvoices} The populated <code>Listinvoices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Listinvoices();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Invoice]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = Metadata.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Invoice>} data
 */
Listinvoices.prototype['data'] = undefined;

/**
 * @member {module:model/Metadata} meta
 */
Listinvoices.prototype['meta'] = undefined;






export default Listinvoices;

