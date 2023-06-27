/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TypeTlsDnsRecord from './TypeTlsDnsRecord';

/**
 * The RelationshipMemberTlsDnsRecord model module.
 * @module model/RelationshipMemberTlsDnsRecord
 * @version 4.3.0
 */
class RelationshipMemberTlsDnsRecord {
    /**
     * Constructs a new <code>RelationshipMemberTlsDnsRecord</code>.
     * @alias module:model/RelationshipMemberTlsDnsRecord
     */
    constructor() { 
        
        RelationshipMemberTlsDnsRecord.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipMemberTlsDnsRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipMemberTlsDnsRecord} obj Optional instance to populate.
     * @return {module:model/RelationshipMemberTlsDnsRecord} The populated <code>RelationshipMemberTlsDnsRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipMemberTlsDnsRecord();

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeTlsDnsRecord.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeTlsDnsRecord} type
 */
RelationshipMemberTlsDnsRecord.prototype['type'] = undefined;

/**
 * @member {String} id
 */
RelationshipMemberTlsDnsRecord.prototype['id'] = undefined;






export default RelationshipMemberTlsDnsRecord;

