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

/**
 * The ArcSessionsMeta model module.
 * @module model/ArcSessionsMeta
 * @version 17.0.0
 */
class ArcSessionsMeta {
    /**
     * Constructs a new <code>ArcSessionsMeta</code>.
     * Metadata about the request.
     * @alias module:model/ArcSessionsMeta
     */
    constructor() { 
        
        ArcSessionsMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArcSessionsMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcSessionsMeta} obj Optional instance to populate.
     * @return {module:model/ArcSessionsMeta} The populated <code>ArcSessionsMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcSessionsMeta();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('next_cursor')) {
                obj['next_cursor'] = ApiClient.convertToType(data['next_cursor'], 'String');
            }
            if (data.hasOwnProperty('prev_cursor')) {
                obj['prev_cursor'] = ApiClient.convertToType(data['prev_cursor'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The `limit` value used when making the request.
 * @member {Number} limit
 */
ArcSessionsMeta.prototype['limit'] = undefined;

/**
 * The `sort` value used when making the request.
 * @member {String} sort
 */
ArcSessionsMeta.prototype['sort'] = undefined;

/**
 * The count of results matching the request.
 * @member {Number} total
 */
ArcSessionsMeta.prototype['total'] = undefined;

/**
 * The cursor to use to request the next page of results. `null` when there are no more results.
 * @member {String} next_cursor
 */
ArcSessionsMeta.prototype['next_cursor'] = undefined;

/**
 * The cursor to use to request the previous page of results. `null` when there is no previous page.
 * @member {String} prev_cursor
 */
ArcSessionsMeta.prototype['prev_cursor'] = undefined;






export default ArcSessionsMeta;

