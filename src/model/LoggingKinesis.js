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
import LoggingFormatVersion from './LoggingFormatVersion';
import LoggingPlacement from './LoggingPlacement';

/**
 * The LoggingKinesis model module.
 * @module model/LoggingKinesis
 * @version 3.0.0-beta3
 */
class LoggingKinesis {
    /**
     * Constructs a new <code>LoggingKinesis</code>.
     * @alias module:model/LoggingKinesis
     */
    constructor() { 
        
        LoggingKinesis.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingKinesis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingKinesis} obj Optional instance to populate.
     * @return {module:model/LoggingKinesis} The populated <code>LoggingKinesis</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingKinesis();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('placement')) {
                obj['placement'] = LoggingPlacement.constructFromObject(data['placement']);
            }
            if (data.hasOwnProperty('format_version')) {
                obj['format_version'] = LoggingFormatVersion.constructFromObject(data['format_version']);
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('topic')) {
                obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('secret_key')) {
                obj['secret_key'] = ApiClient.convertToType(data['secret_key'], 'String');
            }
            if (data.hasOwnProperty('access_key')) {
                obj['access_key'] = ApiClient.convertToType(data['access_key'], 'String');
            }
            if (data.hasOwnProperty('iam_role')) {
                obj['iam_role'] = ApiClient.convertToType(data['iam_role'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingKinesis.prototype['name'] = undefined;

/**
 * @member {module:model/LoggingPlacement} placement
 */
LoggingKinesis.prototype['placement'] = undefined;

/**
 * @member {module:model/LoggingFormatVersion} format_version
 */
LoggingKinesis.prototype['format_version'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Kinesis can ingest.
 * @member {String} format
 * @default '{"timestamp":"%{begin:%Y-%m-%dT%H:%M:%S}t","time_elapsed":"%{time.elapsed.usec}V","is_tls":"%{if(req.is_ssl, \"true\", \"false\")}V","client_ip":"%{req.http.Fastly-Client-IP}V","geo_city":"%{client.geo.city}V","geo_country_code":"%{client.geo.country_code}V","request":"%{req.request}V","host":"%{req.http.Fastly-Orig-Host}V","url":"%{json.escape(req.url)}V","request_referer":"%{json.escape(req.http.Referer)}V","request_user_agent":"%{json.escape(req.http.User-Agent)}V","request_accept_language":"%{json.escape(req.http.Accept-Language)}V","request_accept_charset":"%{json.escape(req.http.Accept-Charset)}V","cache_status":"%{regsub(fastly_info.state, \"^(HIT-(SYNTH)|(HITPASS|HIT|MISS|PASS|ERROR|PIPE)).*\", \"\\2\\3\") }V"}'
 */
LoggingKinesis.prototype['format'] = '{"timestamp":"%{begin:%Y-%m-%dT%H:%M:%S}t","time_elapsed":"%{time.elapsed.usec}V","is_tls":"%{if(req.is_ssl, \"true\", \"false\")}V","client_ip":"%{req.http.Fastly-Client-IP}V","geo_city":"%{client.geo.city}V","geo_country_code":"%{client.geo.country_code}V","request":"%{req.request}V","host":"%{req.http.Fastly-Orig-Host}V","url":"%{json.escape(req.url)}V","request_referer":"%{json.escape(req.http.Referer)}V","request_user_agent":"%{json.escape(req.http.User-Agent)}V","request_accept_language":"%{json.escape(req.http.Accept-Language)}V","request_accept_charset":"%{json.escape(req.http.Accept-Charset)}V","cache_status":"%{regsub(fastly_info.state, \"^(HIT-(SYNTH)|(HITPASS|HIT|MISS|PASS|ERROR|PIPE)).*\", \"\\2\\3\") }V"}';

/**
 * The Amazon Kinesis stream to send logs to. Required.
 * @member {String} topic
 */
LoggingKinesis.prototype['topic'] = undefined;

/**
 * The [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints) to stream logs to.
 * @member {module:model/LoggingKinesis.RegionEnum} region
 */
LoggingKinesis.prototype['region'] = undefined;

/**
 * The secret key associated with the target Amazon Kinesis stream. Not required if `iam_role` is specified.
 * @member {String} secret_key
 */
LoggingKinesis.prototype['secret_key'] = undefined;

/**
 * The access key associated with the target Amazon Kinesis stream. Not required if `iam_role` is specified.
 * @member {String} access_key
 */
LoggingKinesis.prototype['access_key'] = undefined;

/**
 * The ARN for an IAM role granting Fastly access to the target Amazon Kinesis stream. Not required if `access_key` and `secret_key` are provided.
 * @member {String} iam_role
 */
LoggingKinesis.prototype['iam_role'] = undefined;





/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
LoggingKinesis['RegionEnum'] = {

    /**
     * value: "us-east-1"
     * @const
     */
    "us-east-1": "us-east-1",

    /**
     * value: "us-east-2"
     * @const
     */
    "us-east-2": "us-east-2",

    /**
     * value: "us-west-1"
     * @const
     */
    "us-west-1": "us-west-1",

    /**
     * value: "us-west-2"
     * @const
     */
    "us-west-2": "us-west-2",

    /**
     * value: "af-south-1"
     * @const
     */
    "af-south-1": "af-south-1",

    /**
     * value: "ap-east-1"
     * @const
     */
    "ap-east-1": "ap-east-1",

    /**
     * value: "ap-south-1"
     * @const
     */
    "ap-south-1": "ap-south-1",

    /**
     * value: "ap-northeast-3"
     * @const
     */
    "ap-northeast-3": "ap-northeast-3",

    /**
     * value: "ap-northeast-2"
     * @const
     */
    "ap-northeast-2": "ap-northeast-2",

    /**
     * value: "ap-southeast-1"
     * @const
     */
    "ap-southeast-1": "ap-southeast-1",

    /**
     * value: "ap-southeast-2"
     * @const
     */
    "ap-southeast-2": "ap-southeast-2",

    /**
     * value: "ap-northeast-1"
     * @const
     */
    "ap-northeast-1": "ap-northeast-1",

    /**
     * value: "ca-central-1"
     * @const
     */
    "ca-central-1": "ca-central-1",

    /**
     * value: "cn-north-1"
     * @const
     */
    "cn-north-1": "cn-north-1",

    /**
     * value: "cn-northwest-1"
     * @const
     */
    "cn-northwest-1": "cn-northwest-1",

    /**
     * value: "eu-central-1"
     * @const
     */
    "eu-central-1": "eu-central-1",

    /**
     * value: "eu-west-1"
     * @const
     */
    "eu-west-1": "eu-west-1",

    /**
     * value: "eu-west-2"
     * @const
     */
    "eu-west-2": "eu-west-2",

    /**
     * value: "eu-south-1"
     * @const
     */
    "eu-south-1": "eu-south-1",

    /**
     * value: "eu-west-3"
     * @const
     */
    "eu-west-3": "eu-west-3",

    /**
     * value: "eu-north-1"
     * @const
     */
    "eu-north-1": "eu-north-1",

    /**
     * value: "me-south-1"
     * @const
     */
    "me-south-1": "me-south-1",

    /**
     * value: "sa-east-1"
     * @const
     */
    "sa-east-1": "sa-east-1"
};



export default LoggingKinesis;

