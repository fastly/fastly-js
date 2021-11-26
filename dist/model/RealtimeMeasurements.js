"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RealtimeMeasurements model module.
 * @module model/RealtimeMeasurements
 * @version 3.0.0-alpha1
 */
var RealtimeMeasurements = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RealtimeMeasurements</code>.
   * Statistics that have occurred since the last request.
   * @alias module:model/RealtimeMeasurements
   */
  function RealtimeMeasurements() {
    _classCallCheck(this, RealtimeMeasurements);

    RealtimeMeasurements.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RealtimeMeasurements, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RealtimeMeasurements</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RealtimeMeasurements} obj Optional instance to populate.
     * @return {module:model/RealtimeMeasurements} The populated <code>RealtimeMeasurements</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RealtimeMeasurements();

        if (data.hasOwnProperty('requests')) {
          obj['requests'] = _ApiClient["default"].convertToType(data['requests'], 'Number');
        }

        if (data.hasOwnProperty('logging')) {
          obj['logging'] = _ApiClient["default"].convertToType(data['logging'], 'Number');
        }

        if (data.hasOwnProperty('log')) {
          obj['log'] = _ApiClient["default"].convertToType(data['log'], 'Number');
        }

        if (data.hasOwnProperty('resp_header_bytes')) {
          obj['resp_header_bytes'] = _ApiClient["default"].convertToType(data['resp_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('header_size')) {
          obj['header_size'] = _ApiClient["default"].convertToType(data['header_size'], 'Number');
        }

        if (data.hasOwnProperty('resp_body_bytes')) {
          obj['resp_body_bytes'] = _ApiClient["default"].convertToType(data['resp_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('body_size')) {
          obj['body_size'] = _ApiClient["default"].convertToType(data['body_size'], 'Number');
        }

        if (data.hasOwnProperty('hits')) {
          obj['hits'] = _ApiClient["default"].convertToType(data['hits'], 'Number');
        }

        if (data.hasOwnProperty('miss')) {
          obj['miss'] = _ApiClient["default"].convertToType(data['miss'], 'Number');
        }

        if (data.hasOwnProperty('pass')) {
          obj['pass'] = _ApiClient["default"].convertToType(data['pass'], 'Number');
        }

        if (data.hasOwnProperty('synth')) {
          obj['synth'] = _ApiClient["default"].convertToType(data['synth'], 'Number');
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], 'Number');
        }

        if (data.hasOwnProperty('hits_time')) {
          obj['hits_time'] = _ApiClient["default"].convertToType(data['hits_time'], 'Number');
        }

        if (data.hasOwnProperty('miss_time')) {
          obj['miss_time'] = _ApiClient["default"].convertToType(data['miss_time'], 'Number');
        }

        if (data.hasOwnProperty('miss_histogram')) {
          obj['miss_histogram'] = _ApiClient["default"].convertToType(data['miss_histogram'], Object);
        }

        if (data.hasOwnProperty('compute_requests')) {
          obj['compute_requests'] = _ApiClient["default"].convertToType(data['compute_requests'], 'Number');
        }

        if (data.hasOwnProperty('compute_execution_time_ms')) {
          obj['compute_execution_time_ms'] = _ApiClient["default"].convertToType(data['compute_execution_time_ms'], 'Number');
        }

        if (data.hasOwnProperty('compute_ram_used')) {
          obj['compute_ram_used'] = _ApiClient["default"].convertToType(data['compute_ram_used'], 'Number');
        }

        if (data.hasOwnProperty('compute_request_time_ms')) {
          obj['compute_request_time_ms'] = _ApiClient["default"].convertToType(data['compute_request_time_ms'], 'Number');
        }

        if (data.hasOwnProperty('shield')) {
          obj['shield'] = _ApiClient["default"].convertToType(data['shield'], 'Number');
        }

        if (data.hasOwnProperty('ipv6')) {
          obj['ipv6'] = _ApiClient["default"].convertToType(data['ipv6'], 'Number');
        }

        if (data.hasOwnProperty('imgopto')) {
          obj['imgopto'] = _ApiClient["default"].convertToType(data['imgopto'], 'Number');
        }

        if (data.hasOwnProperty('imgopto_shield')) {
          obj['imgopto_shield'] = _ApiClient["default"].convertToType(data['imgopto_shield'], 'Number');
        }

        if (data.hasOwnProperty('imgopto_transforms')) {
          obj['imgopto_transforms'] = _ApiClient["default"].convertToType(data['imgopto_transforms'], 'Number');
        }

        if (data.hasOwnProperty('otfp')) {
          obj['otfp'] = _ApiClient["default"].convertToType(data['otfp'], 'Number');
        }

        if (data.hasOwnProperty('otfp_shield')) {
          obj['otfp_shield'] = _ApiClient["default"].convertToType(data['otfp_shield'], 'Number');
        }

        if (data.hasOwnProperty('otfp_manifests')) {
          obj['otfp_manifests'] = _ApiClient["default"].convertToType(data['otfp_manifests'], 'Number');
        }

        if (data.hasOwnProperty('video')) {
          obj['video'] = _ApiClient["default"].convertToType(data['video'], 'Number');
        }

        if (data.hasOwnProperty('pci')) {
          obj['pci'] = _ApiClient["default"].convertToType(data['pci'], 'Number');
        }

        if (data.hasOwnProperty('http2')) {
          obj['http2'] = _ApiClient["default"].convertToType(data['http2'], 'Number');
        }

        if (data.hasOwnProperty('http3')) {
          obj['http3'] = _ApiClient["default"].convertToType(data['http3'], 'Number');
        }

        if (data.hasOwnProperty('restarts')) {
          obj['restarts'] = _ApiClient["default"].convertToType(data['restarts'], 'Number');
        }

        if (data.hasOwnProperty('req_header_bytes')) {
          obj['req_header_bytes'] = _ApiClient["default"].convertToType(data['req_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('req_body_bytes')) {
          obj['req_body_bytes'] = _ApiClient["default"].convertToType(data['req_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('bereq_header_bytes')) {
          obj['bereq_header_bytes'] = _ApiClient["default"].convertToType(data['bereq_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('bereq_body_bytes')) {
          obj['bereq_body_bytes'] = _ApiClient["default"].convertToType(data['bereq_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('waf_blocked')) {
          obj['waf_blocked'] = _ApiClient["default"].convertToType(data['waf_blocked'], 'Number');
        }

        if (data.hasOwnProperty('waf_logged')) {
          obj['waf_logged'] = _ApiClient["default"].convertToType(data['waf_logged'], 'Number');
        }

        if (data.hasOwnProperty('waf_passed')) {
          obj['waf_passed'] = _ApiClient["default"].convertToType(data['waf_passed'], 'Number');
        }

        if (data.hasOwnProperty('attack_req_header_bytes')) {
          obj['attack_req_header_bytes'] = _ApiClient["default"].convertToType(data['attack_req_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('attack_req_body_bytes')) {
          obj['attack_req_body_bytes'] = _ApiClient["default"].convertToType(data['attack_req_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('attack_resp_synth_bytes')) {
          obj['attack_resp_synth_bytes'] = _ApiClient["default"].convertToType(data['attack_resp_synth_bytes'], 'Number');
        }

        if (data.hasOwnProperty('attack_logged_req_header_bytes')) {
          obj['attack_logged_req_header_bytes'] = _ApiClient["default"].convertToType(data['attack_logged_req_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('attack_logged_req_body_bytes')) {
          obj['attack_logged_req_body_bytes'] = _ApiClient["default"].convertToType(data['attack_logged_req_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('attack_blocked_req_header_bytes')) {
          obj['attack_blocked_req_header_bytes'] = _ApiClient["default"].convertToType(data['attack_blocked_req_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('attack_blocked_req_body_bytes')) {
          obj['attack_blocked_req_body_bytes'] = _ApiClient["default"].convertToType(data['attack_blocked_req_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('attack_passed_req_header_bytes')) {
          obj['attack_passed_req_header_bytes'] = _ApiClient["default"].convertToType(data['attack_passed_req_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('attack_passed_req_body_bytes')) {
          obj['attack_passed_req_body_bytes'] = _ApiClient["default"].convertToType(data['attack_passed_req_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('shield_resp_header_bytes')) {
          obj['shield_resp_header_bytes'] = _ApiClient["default"].convertToType(data['shield_resp_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('shield_resp_body_bytes')) {
          obj['shield_resp_body_bytes'] = _ApiClient["default"].convertToType(data['shield_resp_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('otfp_resp_header_bytes')) {
          obj['otfp_resp_header_bytes'] = _ApiClient["default"].convertToType(data['otfp_resp_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('otfp_resp_body_bytes')) {
          obj['otfp_resp_body_bytes'] = _ApiClient["default"].convertToType(data['otfp_resp_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('otfp_shield_resp_header_bytes')) {
          obj['otfp_shield_resp_header_bytes'] = _ApiClient["default"].convertToType(data['otfp_shield_resp_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('otfp_shield_resp_body_bytes')) {
          obj['otfp_shield_resp_body_bytes'] = _ApiClient["default"].convertToType(data['otfp_shield_resp_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('otfp_shield_time')) {
          obj['otfp_shield_time'] = _ApiClient["default"].convertToType(data['otfp_shield_time'], 'Number');
        }

        if (data.hasOwnProperty('otfp_deliver_time')) {
          obj['otfp_deliver_time'] = _ApiClient["default"].convertToType(data['otfp_deliver_time'], 'Number');
        }

        if (data.hasOwnProperty('imgopto_resp_header_bytes')) {
          obj['imgopto_resp_header_bytes'] = _ApiClient["default"].convertToType(data['imgopto_resp_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('imgopto_resp_body_bytes')) {
          obj['imgopto_resp_body_bytes'] = _ApiClient["default"].convertToType(data['imgopto_resp_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('imgopto_shield_resp_header_bytes')) {
          obj['imgopto_shield_resp_header_bytes'] = _ApiClient["default"].convertToType(data['imgopto_shield_resp_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('imgopto_shield_resp_body_bytes')) {
          obj['imgopto_shield_resp_body_bytes'] = _ApiClient["default"].convertToType(data['imgopto_shield_resp_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('status_1xx')) {
          obj['status_1xx'] = _ApiClient["default"].convertToType(data['status_1xx'], 'Number');
        }

        if (data.hasOwnProperty('status_2xx')) {
          obj['status_2xx'] = _ApiClient["default"].convertToType(data['status_2xx'], 'Number');
        }

        if (data.hasOwnProperty('status_3xx')) {
          obj['status_3xx'] = _ApiClient["default"].convertToType(data['status_3xx'], 'Number');
        }

        if (data.hasOwnProperty('status_4xx')) {
          obj['status_4xx'] = _ApiClient["default"].convertToType(data['status_4xx'], 'Number');
        }

        if (data.hasOwnProperty('status_5xx')) {
          obj['status_5xx'] = _ApiClient["default"].convertToType(data['status_5xx'], 'Number');
        }

        if (data.hasOwnProperty('status_200')) {
          obj['status_200'] = _ApiClient["default"].convertToType(data['status_200'], 'Number');
        }

        if (data.hasOwnProperty('status_204')) {
          obj['status_204'] = _ApiClient["default"].convertToType(data['status_204'], 'Number');
        }

        if (data.hasOwnProperty('status_206')) {
          obj['status_206'] = _ApiClient["default"].convertToType(data['status_206'], 'Number');
        }

        if (data.hasOwnProperty('status_301')) {
          obj['status_301'] = _ApiClient["default"].convertToType(data['status_301'], 'Number');
        }

        if (data.hasOwnProperty('status_302')) {
          obj['status_302'] = _ApiClient["default"].convertToType(data['status_302'], 'Number');
        }

        if (data.hasOwnProperty('status_304')) {
          obj['status_304'] = _ApiClient["default"].convertToType(data['status_304'], 'Number');
        }

        if (data.hasOwnProperty('status_400')) {
          obj['status_400'] = _ApiClient["default"].convertToType(data['status_400'], 'Number');
        }

        if (data.hasOwnProperty('status_401')) {
          obj['status_401'] = _ApiClient["default"].convertToType(data['status_401'], 'Number');
        }

        if (data.hasOwnProperty('status_403')) {
          obj['status_403'] = _ApiClient["default"].convertToType(data['status_403'], 'Number');
        }

        if (data.hasOwnProperty('status_404')) {
          obj['status_404'] = _ApiClient["default"].convertToType(data['status_404'], 'Number');
        }

        if (data.hasOwnProperty('status_416')) {
          obj['status_416'] = _ApiClient["default"].convertToType(data['status_416'], 'Number');
        }

        if (data.hasOwnProperty('status_429')) {
          obj['status_429'] = _ApiClient["default"].convertToType(data['status_429'], 'Number');
        }

        if (data.hasOwnProperty('status_500')) {
          obj['status_500'] = _ApiClient["default"].convertToType(data['status_500'], 'Number');
        }

        if (data.hasOwnProperty('status_501')) {
          obj['status_501'] = _ApiClient["default"].convertToType(data['status_501'], 'Number');
        }

        if (data.hasOwnProperty('status_502')) {
          obj['status_502'] = _ApiClient["default"].convertToType(data['status_502'], 'Number');
        }

        if (data.hasOwnProperty('status_503')) {
          obj['status_503'] = _ApiClient["default"].convertToType(data['status_503'], 'Number');
        }

        if (data.hasOwnProperty('status_504')) {
          obj['status_504'] = _ApiClient["default"].convertToType(data['status_504'], 'Number');
        }

        if (data.hasOwnProperty('status_505')) {
          obj['status_505'] = _ApiClient["default"].convertToType(data['status_505'], 'Number');
        }

        if (data.hasOwnProperty('uncacheable')) {
          obj['uncacheable'] = _ApiClient["default"].convertToType(data['uncacheable'], 'Number');
        }

        if (data.hasOwnProperty('pass_time')) {
          obj['pass_time'] = _ApiClient["default"].convertToType(data['pass_time'], 'Number');
        }

        if (data.hasOwnProperty('tls')) {
          obj['tls'] = _ApiClient["default"].convertToType(data['tls'], 'Number');
        }

        if (data.hasOwnProperty('tls_v10')) {
          obj['tls_v10'] = _ApiClient["default"].convertToType(data['tls_v10'], 'Number');
        }

        if (data.hasOwnProperty('tls_v11')) {
          obj['tls_v11'] = _ApiClient["default"].convertToType(data['tls_v11'], 'Number');
        }

        if (data.hasOwnProperty('tls_v12')) {
          obj['tls_v12'] = _ApiClient["default"].convertToType(data['tls_v12'], 'Number');
        }

        if (data.hasOwnProperty('tls_v13')) {
          obj['tls_v13'] = _ApiClient["default"].convertToType(data['tls_v13'], 'Number');
        }

        if (data.hasOwnProperty('object_size_1k')) {
          obj['object_size_1k'] = _ApiClient["default"].convertToType(data['object_size_1k'], 'Number');
        }

        if (data.hasOwnProperty('object_size_10k')) {
          obj['object_size_10k'] = _ApiClient["default"].convertToType(data['object_size_10k'], 'Number');
        }

        if (data.hasOwnProperty('object_size_100k')) {
          obj['object_size_100k'] = _ApiClient["default"].convertToType(data['object_size_100k'], 'Number');
        }

        if (data.hasOwnProperty('object_size_1m')) {
          obj['object_size_1m'] = _ApiClient["default"].convertToType(data['object_size_1m'], 'Number');
        }

        if (data.hasOwnProperty('object_size_10m')) {
          obj['object_size_10m'] = _ApiClient["default"].convertToType(data['object_size_10m'], 'Number');
        }

        if (data.hasOwnProperty('object_size_100m')) {
          obj['object_size_100m'] = _ApiClient["default"].convertToType(data['object_size_100m'], 'Number');
        }

        if (data.hasOwnProperty('object_size_1g')) {
          obj['object_size_1g'] = _ApiClient["default"].convertToType(data['object_size_1g'], 'Number');
        }

        if (data.hasOwnProperty('object_size_other')) {
          obj['object_size_other'] = _ApiClient["default"].convertToType(data['object_size_other'], 'Number');
        }

        if (data.hasOwnProperty('recv_sub_time')) {
          obj['recv_sub_time'] = _ApiClient["default"].convertToType(data['recv_sub_time'], 'Number');
        }

        if (data.hasOwnProperty('recv_sub_count')) {
          obj['recv_sub_count'] = _ApiClient["default"].convertToType(data['recv_sub_count'], 'Number');
        }

        if (data.hasOwnProperty('hash_sub_time')) {
          obj['hash_sub_time'] = _ApiClient["default"].convertToType(data['hash_sub_time'], 'Number');
        }

        if (data.hasOwnProperty('hash_sub_count')) {
          obj['hash_sub_count'] = _ApiClient["default"].convertToType(data['hash_sub_count'], 'Number');
        }

        if (data.hasOwnProperty('miss_sub_time')) {
          obj['miss_sub_time'] = _ApiClient["default"].convertToType(data['miss_sub_time'], 'Number');
        }

        if (data.hasOwnProperty('miss_sub_count')) {
          obj['miss_sub_count'] = _ApiClient["default"].convertToType(data['miss_sub_count'], 'Number');
        }

        if (data.hasOwnProperty('fetch_sub_time')) {
          obj['fetch_sub_time'] = _ApiClient["default"].convertToType(data['fetch_sub_time'], 'Number');
        }

        if (data.hasOwnProperty('fetch_sub_count')) {
          obj['fetch_sub_count'] = _ApiClient["default"].convertToType(data['fetch_sub_count'], 'Number');
        }

        if (data.hasOwnProperty('pass_sub_time')) {
          obj['pass_sub_time'] = _ApiClient["default"].convertToType(data['pass_sub_time'], 'Number');
        }

        if (data.hasOwnProperty('pass_sub_count')) {
          obj['pass_sub_count'] = _ApiClient["default"].convertToType(data['pass_sub_count'], 'Number');
        }

        if (data.hasOwnProperty('pipe_sub_time')) {
          obj['pipe_sub_time'] = _ApiClient["default"].convertToType(data['pipe_sub_time'], 'Number');
        }

        if (data.hasOwnProperty('pipe_sub_count')) {
          obj['pipe_sub_count'] = _ApiClient["default"].convertToType(data['pipe_sub_count'], 'Number');
        }

        if (data.hasOwnProperty('deliver_sub_time')) {
          obj['deliver_sub_time'] = _ApiClient["default"].convertToType(data['deliver_sub_time'], 'Number');
        }

        if (data.hasOwnProperty('deliver_sub_count')) {
          obj['deliver_sub_count'] = _ApiClient["default"].convertToType(data['deliver_sub_count'], 'Number');
        }

        if (data.hasOwnProperty('error_sub_time')) {
          obj['error_sub_time'] = _ApiClient["default"].convertToType(data['error_sub_time'], 'Number');
        }

        if (data.hasOwnProperty('error_sub_count')) {
          obj['error_sub_count'] = _ApiClient["default"].convertToType(data['error_sub_count'], 'Number');
        }

        if (data.hasOwnProperty('hit_sub_time')) {
          obj['hit_sub_time'] = _ApiClient["default"].convertToType(data['hit_sub_time'], 'Number');
        }

        if (data.hasOwnProperty('hit_sub_count')) {
          obj['hit_sub_count'] = _ApiClient["default"].convertToType(data['hit_sub_count'], 'Number');
        }

        if (data.hasOwnProperty('prehash_sub_time')) {
          obj['prehash_sub_time'] = _ApiClient["default"].convertToType(data['prehash_sub_time'], 'Number');
        }

        if (data.hasOwnProperty('prehash_sub_count')) {
          obj['prehash_sub_count'] = _ApiClient["default"].convertToType(data['prehash_sub_count'], 'Number');
        }

        if (data.hasOwnProperty('predeliver_sub_time')) {
          obj['predeliver_sub_time'] = _ApiClient["default"].convertToType(data['predeliver_sub_time'], 'Number');
        }

        if (data.hasOwnProperty('predeliver_sub_count')) {
          obj['predeliver_sub_count'] = _ApiClient["default"].convertToType(data['predeliver_sub_count'], 'Number');
        }

        if (data.hasOwnProperty('hit_resp_body_bytes')) {
          obj['hit_resp_body_bytes'] = _ApiClient["default"].convertToType(data['hit_resp_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('miss_resp_body_bytes')) {
          obj['miss_resp_body_bytes'] = _ApiClient["default"].convertToType(data['miss_resp_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('pass_resp_body_bytes')) {
          obj['pass_resp_body_bytes'] = _ApiClient["default"].convertToType(data['pass_resp_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('compute_req_header_bytes')) {
          obj['compute_req_header_bytes'] = _ApiClient["default"].convertToType(data['compute_req_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('compute_req_body_bytes')) {
          obj['compute_req_body_bytes'] = _ApiClient["default"].convertToType(data['compute_req_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('compute_resp_header_bytes')) {
          obj['compute_resp_header_bytes'] = _ApiClient["default"].convertToType(data['compute_resp_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('compute_resp_body_bytes')) {
          obj['compute_resp_body_bytes'] = _ApiClient["default"].convertToType(data['compute_resp_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('imgvideo')) {
          obj['imgvideo'] = _ApiClient["default"].convertToType(data['imgvideo'], 'Number');
        }

        if (data.hasOwnProperty('imgvideo_frames')) {
          obj['imgvideo_frames'] = _ApiClient["default"].convertToType(data['imgvideo_frames'], 'Number');
        }

        if (data.hasOwnProperty('imgvideo_resp_header_bytes')) {
          obj['imgvideo_resp_header_bytes'] = _ApiClient["default"].convertToType(data['imgvideo_resp_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('imgvideo_resp_body_bytes')) {
          obj['imgvideo_resp_body_bytes'] = _ApiClient["default"].convertToType(data['imgvideo_resp_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('imgvideo_shield')) {
          obj['imgvideo_shield'] = _ApiClient["default"].convertToType(data['imgvideo_shield'], 'Number');
        }

        if (data.hasOwnProperty('imgvideo_shield_frames')) {
          obj['imgvideo_shield_frames'] = _ApiClient["default"].convertToType(data['imgvideo_shield_frames'], 'Number');
        }

        if (data.hasOwnProperty('imgvideo_shield_resp_header_bytes')) {
          obj['imgvideo_shield_resp_header_bytes'] = _ApiClient["default"].convertToType(data['imgvideo_shield_resp_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('imgvideo_shield_resp_body_bytes')) {
          obj['imgvideo_shield_resp_body_bytes'] = _ApiClient["default"].convertToType(data['imgvideo_shield_resp_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('log_bytes')) {
          obj['log_bytes'] = _ApiClient["default"].convertToType(data['log_bytes'], 'Number');
        }

        if (data.hasOwnProperty('edge_requests')) {
          obj['edge_requests'] = _ApiClient["default"].convertToType(data['edge_requests'], 'Number');
        }

        if (data.hasOwnProperty('edge_resp_header_bytes')) {
          obj['edge_resp_header_bytes'] = _ApiClient["default"].convertToType(data['edge_resp_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('edge_resp_body_bytes')) {
          obj['edge_resp_body_bytes'] = _ApiClient["default"].convertToType(data['edge_resp_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('origin_revalidations')) {
          obj['origin_revalidations'] = _ApiClient["default"].convertToType(data['origin_revalidations'], 'Number');
        }

        if (data.hasOwnProperty('origin_fetches')) {
          obj['origin_fetches'] = _ApiClient["default"].convertToType(data['origin_fetches'], 'Number');
        }

        if (data.hasOwnProperty('origin_fetch_header_bytes')) {
          obj['origin_fetch_header_bytes'] = _ApiClient["default"].convertToType(data['origin_fetch_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('origin_fetch_body_bytes')) {
          obj['origin_fetch_body_bytes'] = _ApiClient["default"].convertToType(data['origin_fetch_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('origin_fetch_resp_header_bytes')) {
          obj['origin_fetch_resp_header_bytes'] = _ApiClient["default"].convertToType(data['origin_fetch_resp_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('origin_fetch_resp_body_bytes')) {
          obj['origin_fetch_resp_body_bytes'] = _ApiClient["default"].convertToType(data['origin_fetch_resp_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('shield_revalidations')) {
          obj['shield_revalidations'] = _ApiClient["default"].convertToType(data['shield_revalidations'], 'Number');
        }

        if (data.hasOwnProperty('shield_fetches')) {
          obj['shield_fetches'] = _ApiClient["default"].convertToType(data['shield_fetches'], 'Number');
        }

        if (data.hasOwnProperty('shield_fetch_header_bytes')) {
          obj['shield_fetch_header_bytes'] = _ApiClient["default"].convertToType(data['shield_fetch_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('shield_fetch_body_bytes')) {
          obj['shield_fetch_body_bytes'] = _ApiClient["default"].convertToType(data['shield_fetch_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('shield_fetch_resp_header_bytes')) {
          obj['shield_fetch_resp_header_bytes'] = _ApiClient["default"].convertToType(data['shield_fetch_resp_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('shield_fetch_resp_body_bytes')) {
          obj['shield_fetch_resp_body_bytes'] = _ApiClient["default"].convertToType(data['shield_fetch_resp_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('segblock_origin_fetches')) {
          obj['segblock_origin_fetches'] = _ApiClient["default"].convertToType(data['segblock_origin_fetches'], 'Number');
        }

        if (data.hasOwnProperty('segblock_shield_fetches')) {
          obj['segblock_shield_fetches'] = _ApiClient["default"].convertToType(data['segblock_shield_fetches'], 'Number');
        }

        if (data.hasOwnProperty('compute_resp_status_1xx')) {
          obj['compute_resp_status_1xx'] = _ApiClient["default"].convertToType(data['compute_resp_status_1xx'], 'Number');
        }

        if (data.hasOwnProperty('compute_resp_status_2xx')) {
          obj['compute_resp_status_2xx'] = _ApiClient["default"].convertToType(data['compute_resp_status_2xx'], 'Number');
        }

        if (data.hasOwnProperty('compute_resp_status_3xx')) {
          obj['compute_resp_status_3xx'] = _ApiClient["default"].convertToType(data['compute_resp_status_3xx'], 'Number');
        }

        if (data.hasOwnProperty('compute_resp_status_4xx')) {
          obj['compute_resp_status_4xx'] = _ApiClient["default"].convertToType(data['compute_resp_status_4xx'], 'Number');
        }

        if (data.hasOwnProperty('compute_resp_status_5xx')) {
          obj['compute_resp_status_5xx'] = _ApiClient["default"].convertToType(data['compute_resp_status_5xx'], 'Number');
        }

        if (data.hasOwnProperty('edge_hit_requests')) {
          obj['edge_hit_requests'] = _ApiClient["default"].convertToType(data['edge_hit_requests'], 'Number');
        }

        if (data.hasOwnProperty('edge_miss_requests')) {
          obj['edge_miss_requests'] = _ApiClient["default"].convertToType(data['edge_miss_requests'], 'Number');
        }

        if (data.hasOwnProperty('compute_bereq_header_bytes')) {
          obj['compute_bereq_header_bytes'] = _ApiClient["default"].convertToType(data['compute_bereq_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('compute_bereq_body_bytes')) {
          obj['compute_bereq_body_bytes'] = _ApiClient["default"].convertToType(data['compute_bereq_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('compute_beresp_header_bytes')) {
          obj['compute_beresp_header_bytes'] = _ApiClient["default"].convertToType(data['compute_beresp_header_bytes'], 'Number');
        }

        if (data.hasOwnProperty('compute_beresp_body_bytes')) {
          obj['compute_beresp_body_bytes'] = _ApiClient["default"].convertToType(data['compute_beresp_body_bytes'], 'Number');
        }

        if (data.hasOwnProperty('origin_cache_fetches')) {
          obj['origin_cache_fetches'] = _ApiClient["default"].convertToType(data['origin_cache_fetches'], 'Number');
        }

        if (data.hasOwnProperty('shield_cache_fetches')) {
          obj['shield_cache_fetches'] = _ApiClient["default"].convertToType(data['shield_cache_fetches'], 'Number');
        }

        if (data.hasOwnProperty('compute_bereqs')) {
          obj['compute_bereqs'] = _ApiClient["default"].convertToType(data['compute_bereqs'], 'Number');
        }

        if (data.hasOwnProperty('compute_bereq_errors')) {
          obj['compute_bereq_errors'] = _ApiClient["default"].convertToType(data['compute_bereq_errors'], 'Number');
        }

        if (data.hasOwnProperty('compute_resource_limit_exceeded')) {
          obj['compute_resource_limit_exceeded'] = _ApiClient["default"].convertToType(data['compute_resource_limit_exceeded'], 'Number');
        }

        if (data.hasOwnProperty('compute_heap_limit_exceeded')) {
          obj['compute_heap_limit_exceeded'] = _ApiClient["default"].convertToType(data['compute_heap_limit_exceeded'], 'Number');
        }

        if (data.hasOwnProperty('compute_stack_limit_exceeded')) {
          obj['compute_stack_limit_exceeded'] = _ApiClient["default"].convertToType(data['compute_stack_limit_exceeded'], 'Number');
        }

        if (data.hasOwnProperty('compute_globals_limit_exceeded')) {
          obj['compute_globals_limit_exceeded'] = _ApiClient["default"].convertToType(data['compute_globals_limit_exceeded'], 'Number');
        }

        if (data.hasOwnProperty('compute_guest_errors')) {
          obj['compute_guest_errors'] = _ApiClient["default"].convertToType(data['compute_guest_errors'], 'Number');
        }

        if (data.hasOwnProperty('compute_runtime_errors')) {
          obj['compute_runtime_errors'] = _ApiClient["default"].convertToType(data['compute_runtime_errors'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RealtimeMeasurements;
}();
/**
 * Number of requests processed.
 * @member {Number} requests
 */


RealtimeMeasurements.prototype['requests'] = undefined;
/**
 * Number of log lines sent (alias for `log`).
 * @member {Number} logging
 */

RealtimeMeasurements.prototype['logging'] = undefined;
/**
 * Number of log lines sent.
 * @member {Number} log
 */

RealtimeMeasurements.prototype['log'] = undefined;
/**
 * Total header bytes delivered (edge_resp_header_bytes + shield_resp_header_bytes).
 * @member {Number} resp_header_bytes
 */

RealtimeMeasurements.prototype['resp_header_bytes'] = undefined;
/**
 * Total header bytes delivered (alias for resp_header_bytes).
 * @member {Number} header_size
 */

RealtimeMeasurements.prototype['header_size'] = undefined;
/**
 * Total body bytes delivered (edge_resp_body_bytes + shield_resp_body_bytes).
 * @member {Number} resp_body_bytes
 */

RealtimeMeasurements.prototype['resp_body_bytes'] = undefined;
/**
 * Total body bytes delivered (alias for resp_body_bytes).
 * @member {Number} body_size
 */

RealtimeMeasurements.prototype['body_size'] = undefined;
/**
 * Number of cache hits.
 * @member {Number} hits
 */

RealtimeMeasurements.prototype['hits'] = undefined;
/**
 * Number of cache misses.
 * @member {Number} miss
 */

RealtimeMeasurements.prototype['miss'] = undefined;
/**
 * Number of requests that passed through the CDN without being cached.
 * @member {Number} pass
 */

RealtimeMeasurements.prototype['pass'] = undefined;
/**
 * Number of requests that returned a synthetic response (i.e., response objects created with the `synthetic` VCL statement).
 * @member {Number} synth
 */

RealtimeMeasurements.prototype['synth'] = undefined;
/**
 * Number of cache errors.
 * @member {Number} errors
 */

RealtimeMeasurements.prototype['errors'] = undefined;
/**
 * Total amount of time spent processing cache hits (in seconds).
 * @member {Number} hits_time
 */

RealtimeMeasurements.prototype['hits_time'] = undefined;
/**
 * Total amount of time spent processing cache misses (in seconds).
 * @member {Number} miss_time
 */

RealtimeMeasurements.prototype['miss_time'] = undefined;
/**
 * A histogram. Each key represents the upper bound of a span of 10 milliseconds and the values represent the number of requests to origin during that 10ms period. Any origin request that takes more than 60 seconds to return will be in the 60000 bucket.
 * @member {Object} miss_histogram
 */

RealtimeMeasurements.prototype['miss_histogram'] = undefined;
/**
 * The total number of requests that were received for your service by Fastly.
 * @member {Number} compute_requests
 */

RealtimeMeasurements.prototype['compute_requests'] = undefined;
/**
 * The amount of active CPU time used to process your requests (in milliseconds).
 * @member {Number} compute_execution_time_ms
 */

RealtimeMeasurements.prototype['compute_execution_time_ms'] = undefined;
/**
 * The amount of RAM used for your service by Fastly (in bytes).
 * @member {Number} compute_ram_used
 */

RealtimeMeasurements.prototype['compute_ram_used'] = undefined;
/**
 * The total, actual amount of time used to process your requests, including active CPU time (in milliseconds).
 * @member {Number} compute_request_time_ms
 */

RealtimeMeasurements.prototype['compute_request_time_ms'] = undefined;
/**
 * Number of requests from edge to the shield POP.
 * @member {Number} shield
 */

RealtimeMeasurements.prototype['shield'] = undefined;
/**
 * Number of requests that were received over IPv6.
 * @member {Number} ipv6
 */

RealtimeMeasurements.prototype['ipv6'] = undefined;
/**
 * Number of responses that came from the Fastly Image Optimizer service. If the service receives 10 requests for an image, this stat will be 10 regardless of how many times the image was transformed.
 * @member {Number} imgopto
 */

RealtimeMeasurements.prototype['imgopto'] = undefined;
/**
 * Number of responses that came from the Fastly Image Optimizer service via a shield.
 * @member {Number} imgopto_shield
 */

RealtimeMeasurements.prototype['imgopto_shield'] = undefined;
/**
 * Number of transforms performed by the Fastly Image Optimizer service.
 * @member {Number} imgopto_transforms
 */

RealtimeMeasurements.prototype['imgopto_transforms'] = undefined;
/**
 * Number of responses that came from the Fastly On-the-Fly Packaging service for video-on-demand.
 * @member {Number} otfp
 */

RealtimeMeasurements.prototype['otfp'] = undefined;
/**
 * Number of responses that came from the Fastly On-the-Fly Packaging service for video-on-demand via a shield.
 * @member {Number} otfp_shield
 */

RealtimeMeasurements.prototype['otfp_shield'] = undefined;
/**
 * Number of responses that were manifest files from the Fastly On-the-Fly Packaging service for video-on-demand.
 * @member {Number} otfp_manifests
 */

RealtimeMeasurements.prototype['otfp_manifests'] = undefined;
/**
 * Number of responses with the video segment or video manifest MIME type (i.e., application/x-mpegurl, application/vnd.apple.mpegurl, application/f4m, application/dash+xml, application/vnd.ms-sstr+xml, ideo/mp2t, audio/aac, video/f4f, video/x-flv, video/mp4, audio/mp4).
 * @member {Number} video
 */

RealtimeMeasurements.prototype['video'] = undefined;
/**
 * Number of responses with the PCI flag turned on.
 * @member {Number} pci
 */

RealtimeMeasurements.prototype['pci'] = undefined;
/**
 * Number of requests received over HTTP/2.
 * @member {Number} http2
 */

RealtimeMeasurements.prototype['http2'] = undefined;
/**
 * Number of requests received over HTTP/3.
 * @member {Number} http3
 */

RealtimeMeasurements.prototype['http3'] = undefined;
/**
 * Number of restarts performed.
 * @member {Number} restarts
 */

RealtimeMeasurements.prototype['restarts'] = undefined;
/**
 * Total header bytes received.
 * @member {Number} req_header_bytes
 */

RealtimeMeasurements.prototype['req_header_bytes'] = undefined;
/**
 * Total body bytes received.
 * @member {Number} req_body_bytes
 */

RealtimeMeasurements.prototype['req_body_bytes'] = undefined;
/**
 * Total header bytes sent to origin.
 * @member {Number} bereq_header_bytes
 */

RealtimeMeasurements.prototype['bereq_header_bytes'] = undefined;
/**
 * Total body bytes sent to origin.
 * @member {Number} bereq_body_bytes
 */

RealtimeMeasurements.prototype['bereq_body_bytes'] = undefined;
/**
 * Number of requests that triggered a WAF rule and were blocked.
 * @member {Number} waf_blocked
 */

RealtimeMeasurements.prototype['waf_blocked'] = undefined;
/**
 * Number of requests that triggered a WAF rule and were logged.
 * @member {Number} waf_logged
 */

RealtimeMeasurements.prototype['waf_logged'] = undefined;
/**
 * Number of requests that triggered a WAF rule and were passed.
 * @member {Number} waf_passed
 */

RealtimeMeasurements.prototype['waf_passed'] = undefined;
/**
 * Total header bytes received from requests that triggered a WAF rule.
 * @member {Number} attack_req_header_bytes
 */

RealtimeMeasurements.prototype['attack_req_header_bytes'] = undefined;
/**
 * Total body bytes received from requests that triggered a WAF rule.
 * @member {Number} attack_req_body_bytes
 */

RealtimeMeasurements.prototype['attack_req_body_bytes'] = undefined;
/**
 * Total bytes delivered for requests that triggered a WAF rule and returned a synthetic response.
 * @member {Number} attack_resp_synth_bytes
 */

RealtimeMeasurements.prototype['attack_resp_synth_bytes'] = undefined;
/**
 * Total header bytes received from requests that triggered a WAF rule that was logged.
 * @member {Number} attack_logged_req_header_bytes
 */

RealtimeMeasurements.prototype['attack_logged_req_header_bytes'] = undefined;
/**
 * Total body bytes received from requests that triggered a WAF rule that was logged.
 * @member {Number} attack_logged_req_body_bytes
 */

RealtimeMeasurements.prototype['attack_logged_req_body_bytes'] = undefined;
/**
 * Total header bytes received from requests that triggered a WAF rule that was blocked.
 * @member {Number} attack_blocked_req_header_bytes
 */

RealtimeMeasurements.prototype['attack_blocked_req_header_bytes'] = undefined;
/**
 * Total body bytes received from requests that triggered a WAF rule that was blocked.
 * @member {Number} attack_blocked_req_body_bytes
 */

RealtimeMeasurements.prototype['attack_blocked_req_body_bytes'] = undefined;
/**
 * Total header bytes received from requests that triggered a WAF rule that was passed.
 * @member {Number} attack_passed_req_header_bytes
 */

RealtimeMeasurements.prototype['attack_passed_req_header_bytes'] = undefined;
/**
 * Total body bytes received from requests that triggered a WAF rule that was passed.
 * @member {Number} attack_passed_req_body_bytes
 */

RealtimeMeasurements.prototype['attack_passed_req_body_bytes'] = undefined;
/**
 * Total header bytes delivered via a shield.
 * @member {Number} shield_resp_header_bytes
 */

RealtimeMeasurements.prototype['shield_resp_header_bytes'] = undefined;
/**
 * Total body bytes delivered via a shield.
 * @member {Number} shield_resp_body_bytes
 */

RealtimeMeasurements.prototype['shield_resp_body_bytes'] = undefined;
/**
 * Total header bytes delivered from the Fastly On-the-Fly Packaging service for video-on-demand.
 * @member {Number} otfp_resp_header_bytes
 */

RealtimeMeasurements.prototype['otfp_resp_header_bytes'] = undefined;
/**
 * Total body bytes delivered from the Fastly On-the-Fly Packaging service for video-on-demand.
 * @member {Number} otfp_resp_body_bytes
 */

RealtimeMeasurements.prototype['otfp_resp_body_bytes'] = undefined;
/**
 * Total header bytes delivered via a shield for the Fastly On-the-Fly Packaging service for video-on-demand.
 * @member {Number} otfp_shield_resp_header_bytes
 */

RealtimeMeasurements.prototype['otfp_shield_resp_header_bytes'] = undefined;
/**
 * Total body bytes delivered via a shield for the Fastly On-the-Fly Packaging service for video-on-demand.
 * @member {Number} otfp_shield_resp_body_bytes
 */

RealtimeMeasurements.prototype['otfp_shield_resp_body_bytes'] = undefined;
/**
 * Total amount of time spent delivering a response via a shield from the Fastly On-the-Fly Packaging service for video-on-demand (in seconds).
 * @member {Number} otfp_shield_time
 */

RealtimeMeasurements.prototype['otfp_shield_time'] = undefined;
/**
 * Total amount of time spent delivering a response from the Fastly On-the-Fly Packaging service for video-on-demand (in seconds).
 * @member {Number} otfp_deliver_time
 */

RealtimeMeasurements.prototype['otfp_deliver_time'] = undefined;
/**
 * Total header bytes delivered from the Fastly Image Optimizer service, including shield traffic.
 * @member {Number} imgopto_resp_header_bytes
 */

RealtimeMeasurements.prototype['imgopto_resp_header_bytes'] = undefined;
/**
 * Total body bytes delivered from the Fastly Image Optimizer service, including shield traffic.
 * @member {Number} imgopto_resp_body_bytes
 */

RealtimeMeasurements.prototype['imgopto_resp_body_bytes'] = undefined;
/**
 * Total header bytes delivered via a shield from the Fastly Image Optimizer service.
 * @member {Number} imgopto_shield_resp_header_bytes
 */

RealtimeMeasurements.prototype['imgopto_shield_resp_header_bytes'] = undefined;
/**
 * Total body bytes delivered via a shield from the Fastly Image Optimizer service.
 * @member {Number} imgopto_shield_resp_body_bytes
 */

RealtimeMeasurements.prototype['imgopto_shield_resp_body_bytes'] = undefined;
/**
 * Number of \"Informational\" category status codes delivered.
 * @member {Number} status_1xx
 */

RealtimeMeasurements.prototype['status_1xx'] = undefined;
/**
 * Number of \"Success\" status codes delivered.
 * @member {Number} status_2xx
 */

RealtimeMeasurements.prototype['status_2xx'] = undefined;
/**
 * Number of \"Redirection\" codes delivered.
 * @member {Number} status_3xx
 */

RealtimeMeasurements.prototype['status_3xx'] = undefined;
/**
 * Number of \"Client Error\" codes delivered.
 * @member {Number} status_4xx
 */

RealtimeMeasurements.prototype['status_4xx'] = undefined;
/**
 * Number of \"Server Error\" codes delivered.
 * @member {Number} status_5xx
 */

RealtimeMeasurements.prototype['status_5xx'] = undefined;
/**
 * Number of responses sent with status code 200 (Success).
 * @member {Number} status_200
 */

RealtimeMeasurements.prototype['status_200'] = undefined;
/**
 * Number of responses sent with status code 204 (No Content).
 * @member {Number} status_204
 */

RealtimeMeasurements.prototype['status_204'] = undefined;
/**
 * Number of responses sent with status code 206 (Partial Content).
 * @member {Number} status_206
 */

RealtimeMeasurements.prototype['status_206'] = undefined;
/**
 * Number of responses sent with status code 301 (Moved Permanently).
 * @member {Number} status_301
 */

RealtimeMeasurements.prototype['status_301'] = undefined;
/**
 * Number of responses sent with status code 302 (Found).
 * @member {Number} status_302
 */

RealtimeMeasurements.prototype['status_302'] = undefined;
/**
 * Number of responses sent with status code 304 (Not Modified).
 * @member {Number} status_304
 */

RealtimeMeasurements.prototype['status_304'] = undefined;
/**
 * Number of responses sent with status code 400 (Bad Request).
 * @member {Number} status_400
 */

RealtimeMeasurements.prototype['status_400'] = undefined;
/**
 * Number of responses sent with status code 401 (Unauthorized).
 * @member {Number} status_401
 */

RealtimeMeasurements.prototype['status_401'] = undefined;
/**
 * Number of responses sent with status code 403 (Forbidden).
 * @member {Number} status_403
 */

RealtimeMeasurements.prototype['status_403'] = undefined;
/**
 * Number of responses sent with status code 404 (Not Found).
 * @member {Number} status_404
 */

RealtimeMeasurements.prototype['status_404'] = undefined;
/**
 * Number of responses sent with status code 416 (Range Not Satisfiable).
 * @member {Number} status_416
 */

RealtimeMeasurements.prototype['status_416'] = undefined;
/**
 * Number of responses sent with status code 429 (Too Many Requests).
 * @member {Number} status_429
 */

RealtimeMeasurements.prototype['status_429'] = undefined;
/**
 * Number of responses sent with status code 500 (Internal Server Error).
 * @member {Number} status_500
 */

RealtimeMeasurements.prototype['status_500'] = undefined;
/**
 * Number of responses sent with status code 501 (Not Implemented).
 * @member {Number} status_501
 */

RealtimeMeasurements.prototype['status_501'] = undefined;
/**
 * Number of responses sent with status code 502 (Bad Gateway).
 * @member {Number} status_502
 */

RealtimeMeasurements.prototype['status_502'] = undefined;
/**
 * Number of responses sent with status code 503 (Service Unavailable).
 * @member {Number} status_503
 */

RealtimeMeasurements.prototype['status_503'] = undefined;
/**
 * Number of responses sent with status code 504 (Gateway Timeout).
 * @member {Number} status_504
 */

RealtimeMeasurements.prototype['status_504'] = undefined;
/**
 * Number of responses sent with status code 505 (HTTP Version Not Supported).
 * @member {Number} status_505
 */

RealtimeMeasurements.prototype['status_505'] = undefined;
/**
 * Number of requests that were designated uncachable.
 * @member {Number} uncacheable
 */

RealtimeMeasurements.prototype['uncacheable'] = undefined;
/**
 * Total amount of time spent processing cache passes (in seconds).
 * @member {Number} pass_time
 */

RealtimeMeasurements.prototype['pass_time'] = undefined;
/**
 * Number of requests that were received over TLS.
 * @member {Number} tls
 */

RealtimeMeasurements.prototype['tls'] = undefined;
/**
 * Number of requests received over TLS 1.0.
 * @member {Number} tls_v10
 */

RealtimeMeasurements.prototype['tls_v10'] = undefined;
/**
 * Number of requests received over TLS 1.1.
 * @member {Number} tls_v11
 */

RealtimeMeasurements.prototype['tls_v11'] = undefined;
/**
 * Number of requests received over TLS 1.2.
 * @member {Number} tls_v12
 */

RealtimeMeasurements.prototype['tls_v12'] = undefined;
/**
 * Number of requests received over TLS 1.3.
 * @member {Number} tls_v13
 */

RealtimeMeasurements.prototype['tls_v13'] = undefined;
/**
 * Number of objects served that were under 1KB in size.
 * @member {Number} object_size_1k
 */

RealtimeMeasurements.prototype['object_size_1k'] = undefined;
/**
 * Number of objects served that were between 1KB and 10KB in size.
 * @member {Number} object_size_10k
 */

RealtimeMeasurements.prototype['object_size_10k'] = undefined;
/**
 * Number of objects served that were between 10KB and 100KB in size.
 * @member {Number} object_size_100k
 */

RealtimeMeasurements.prototype['object_size_100k'] = undefined;
/**
 * Number of objects served that were between 100KB and 1MB in size.
 * @member {Number} object_size_1m
 */

RealtimeMeasurements.prototype['object_size_1m'] = undefined;
/**
 * Number of objects served that were between 1MB and 10MB in size.
 * @member {Number} object_size_10m
 */

RealtimeMeasurements.prototype['object_size_10m'] = undefined;
/**
 * Number of objects served that were between 10MB and 100MB in size.
 * @member {Number} object_size_100m
 */

RealtimeMeasurements.prototype['object_size_100m'] = undefined;
/**
 * Number of objects served that were between 100MB and 1GB in size.
 * @member {Number} object_size_1g
 */

RealtimeMeasurements.prototype['object_size_1g'] = undefined;
/**
 * Number of objects served that were larger than 1GB in size.
 * @member {Number} object_size_other
 */

RealtimeMeasurements.prototype['object_size_other'] = undefined;
/**
 * Time spent inside the `vcl_recv` Varnish subroutine (in nanoseconds).
 * @member {Number} recv_sub_time
 */

RealtimeMeasurements.prototype['recv_sub_time'] = undefined;
/**
 * Number of executions of the `vcl_recv` Varnish subroutine.
 * @member {Number} recv_sub_count
 */

RealtimeMeasurements.prototype['recv_sub_count'] = undefined;
/**
 * Time spent inside the `vcl_hash` Varnish subroutine (in nanoseconds).
 * @member {Number} hash_sub_time
 */

RealtimeMeasurements.prototype['hash_sub_time'] = undefined;
/**
 * Number of executions of the `vcl_hash` Varnish subroutine.
 * @member {Number} hash_sub_count
 */

RealtimeMeasurements.prototype['hash_sub_count'] = undefined;
/**
 * Time spent inside the `vcl_miss` Varnish subroutine (in nanoseconds).
 * @member {Number} miss_sub_time
 */

RealtimeMeasurements.prototype['miss_sub_time'] = undefined;
/**
 * Number of executions of the `vcl_miss` Varnish subroutine.
 * @member {Number} miss_sub_count
 */

RealtimeMeasurements.prototype['miss_sub_count'] = undefined;
/**
 * Time spent inside the `vcl_fetch` Varnish subroutine (in nanoseconds).
 * @member {Number} fetch_sub_time
 */

RealtimeMeasurements.prototype['fetch_sub_time'] = undefined;
/**
 * Number of executions of the `vcl_fetch` Varnish subroutine.
 * @member {Number} fetch_sub_count
 */

RealtimeMeasurements.prototype['fetch_sub_count'] = undefined;
/**
 * Time spent inside the `vcl_pass` Varnish subroutine (in nanoseconds).
 * @member {Number} pass_sub_time
 */

RealtimeMeasurements.prototype['pass_sub_time'] = undefined;
/**
 * Number of executions of the `vcl_pass` Varnish subroutine.
 * @member {Number} pass_sub_count
 */

RealtimeMeasurements.prototype['pass_sub_count'] = undefined;
/**
 * Time spent inside the `vcl_pipe` Varnish subroutine (in nanoseconds).
 * @member {Number} pipe_sub_time
 */

RealtimeMeasurements.prototype['pipe_sub_time'] = undefined;
/**
 * Number of executions of the `vcl_pipe` Varnish subroutine.
 * @member {Number} pipe_sub_count
 */

RealtimeMeasurements.prototype['pipe_sub_count'] = undefined;
/**
 * Time spent inside the `vcl_deliver` Varnish subroutine (in nanoseconds).
 * @member {Number} deliver_sub_time
 */

RealtimeMeasurements.prototype['deliver_sub_time'] = undefined;
/**
 * Number of executions of the `vcl_deliver` Varnish subroutine.
 * @member {Number} deliver_sub_count
 */

RealtimeMeasurements.prototype['deliver_sub_count'] = undefined;
/**
 * Time spent inside the `vcl_error` Varnish subroutine (in nanoseconds).
 * @member {Number} error_sub_time
 */

RealtimeMeasurements.prototype['error_sub_time'] = undefined;
/**
 * Number of executions of the `vcl_error` Varnish subroutine.
 * @member {Number} error_sub_count
 */

RealtimeMeasurements.prototype['error_sub_count'] = undefined;
/**
 * Time spent inside the `vcl_hit` Varnish subroutine (in nanoseconds).
 * @member {Number} hit_sub_time
 */

RealtimeMeasurements.prototype['hit_sub_time'] = undefined;
/**
 * Number of executions of the `vcl_hit` Varnish subroutine.
 * @member {Number} hit_sub_count
 */

RealtimeMeasurements.prototype['hit_sub_count'] = undefined;
/**
 * Time spent inside the `vcl_prehash` Varnish subroutine (in nanoseconds).
 * @member {Number} prehash_sub_time
 */

RealtimeMeasurements.prototype['prehash_sub_time'] = undefined;
/**
 * Number of executions of the `vcl_prehash` Varnish subroutine.
 * @member {Number} prehash_sub_count
 */

RealtimeMeasurements.prototype['prehash_sub_count'] = undefined;
/**
 * Time spent inside the `vcl_predeliver` Varnish subroutine (in nanoseconds).
 * @member {Number} predeliver_sub_time
 */

RealtimeMeasurements.prototype['predeliver_sub_time'] = undefined;
/**
 * Number of executions of the `vcl_predeliver` Varnish subroutine.
 * @member {Number} predeliver_sub_count
 */

RealtimeMeasurements.prototype['predeliver_sub_count'] = undefined;
/**
 * Total body bytes delivered for cache hits.
 * @member {Number} hit_resp_body_bytes
 */

RealtimeMeasurements.prototype['hit_resp_body_bytes'] = undefined;
/**
 * Total body bytes delivered for cache misses.
 * @member {Number} miss_resp_body_bytes
 */

RealtimeMeasurements.prototype['miss_resp_body_bytes'] = undefined;
/**
 * Total body bytes delivered for cache passes.
 * @member {Number} pass_resp_body_bytes
 */

RealtimeMeasurements.prototype['pass_resp_body_bytes'] = undefined;
/**
 * Total header bytes received by Compute@Edge.
 * @member {Number} compute_req_header_bytes
 */

RealtimeMeasurements.prototype['compute_req_header_bytes'] = undefined;
/**
 * Total body bytes received by Compute@Edge.
 * @member {Number} compute_req_body_bytes
 */

RealtimeMeasurements.prototype['compute_req_body_bytes'] = undefined;
/**
 * Total header bytes sent from Compute@Edge to end user.
 * @member {Number} compute_resp_header_bytes
 */

RealtimeMeasurements.prototype['compute_resp_header_bytes'] = undefined;
/**
 * Total body bytes sent from Compute@Edge to end user.
 * @member {Number} compute_resp_body_bytes
 */

RealtimeMeasurements.prototype['compute_resp_body_bytes'] = undefined;
/**
 * Number of video responses that came from the Fastly Image Optimizer service.
 * @member {Number} imgvideo
 */

RealtimeMeasurements.prototype['imgvideo'] = undefined;
/**
 * Number of video frames that came from the Fastly Image Optimizer service. A video frame is an individual image within a sequence of video.
 * @member {Number} imgvideo_frames
 */

RealtimeMeasurements.prototype['imgvideo_frames'] = undefined;
/**
 * Total header bytes of video delivered from the Fastly Image Optimizer service.
 * @member {Number} imgvideo_resp_header_bytes
 */

RealtimeMeasurements.prototype['imgvideo_resp_header_bytes'] = undefined;
/**
 * Total body bytes of video delivered from the Fastly Image Optimizer service.
 * @member {Number} imgvideo_resp_body_bytes
 */

RealtimeMeasurements.prototype['imgvideo_resp_body_bytes'] = undefined;
/**
 * Number of video responses delivered via a shield that came from the Fastly Image Optimizer service.
 * @member {Number} imgvideo_shield
 */

RealtimeMeasurements.prototype['imgvideo_shield'] = undefined;
/**
 * Number of video frames delivered via a shield that came from the Fastly Image Optimizer service. A video frame is an individual image within a sequence of video.
 * @member {Number} imgvideo_shield_frames
 */

RealtimeMeasurements.prototype['imgvideo_shield_frames'] = undefined;
/**
 * Total header bytes of video delivered via a shield from the Fastly Image Optimizer service.
 * @member {Number} imgvideo_shield_resp_header_bytes
 */

RealtimeMeasurements.prototype['imgvideo_shield_resp_header_bytes'] = undefined;
/**
 * Total body bytes of video delivered via a shield from the Fastly Image Optimizer service.
 * @member {Number} imgvideo_shield_resp_body_bytes
 */

RealtimeMeasurements.prototype['imgvideo_shield_resp_body_bytes'] = undefined;
/**
 * Total log bytes sent.
 * @member {Number} log_bytes
 */

RealtimeMeasurements.prototype['log_bytes'] = undefined;
/**
 * Number of requests sent by end users to Fastly.
 * @member {Number} edge_requests
 */

RealtimeMeasurements.prototype['edge_requests'] = undefined;
/**
 * Total header bytes delivered from Fastly to the end user.
 * @member {Number} edge_resp_header_bytes
 */

RealtimeMeasurements.prototype['edge_resp_header_bytes'] = undefined;
/**
 * Total body bytes delivered from Fastly to the end user.
 * @member {Number} edge_resp_body_bytes
 */

RealtimeMeasurements.prototype['edge_resp_body_bytes'] = undefined;
/**
 * Number of responses received from origin with a `304` status code in response to an `If-Modified-Since` or `If-None-Match` request. Under regular scenarios, a revalidation will imply a cache hit. However, if using Fastly Image Optimizer or segmented caching this may result in a cache miss.
 * @member {Number} origin_revalidations
 */

RealtimeMeasurements.prototype['origin_revalidations'] = undefined;
/**
 * Number of requests sent to origin.
 * @member {Number} origin_fetches
 */

RealtimeMeasurements.prototype['origin_fetches'] = undefined;
/**
 * Total request header bytes sent to origin.
 * @member {Number} origin_fetch_header_bytes
 */

RealtimeMeasurements.prototype['origin_fetch_header_bytes'] = undefined;
/**
 * Total request body bytes sent to origin.
 * @member {Number} origin_fetch_body_bytes
 */

RealtimeMeasurements.prototype['origin_fetch_body_bytes'] = undefined;
/**
 * Total header bytes received from origin.
 * @member {Number} origin_fetch_resp_header_bytes
 */

RealtimeMeasurements.prototype['origin_fetch_resp_header_bytes'] = undefined;
/**
 * Total body bytes received from origin.
 * @member {Number} origin_fetch_resp_body_bytes
 */

RealtimeMeasurements.prototype['origin_fetch_resp_body_bytes'] = undefined;
/**
 * Number of responses received from origin with a `304` status code, in response to an `If-Modified-Since` or `If-None-Match` request to a shield. Under regular scenarios, a revalidation will imply a cache hit. However, if using segmented caching this may result in a cache miss.
 * @member {Number} shield_revalidations
 */

RealtimeMeasurements.prototype['shield_revalidations'] = undefined;
/**
 * Number of requests made from one Fastly data center to another, as part of shielding.
 * @member {Number} shield_fetches
 */

RealtimeMeasurements.prototype['shield_fetches'] = undefined;
/**
 * Total request header bytes sent to a shield.
 * @member {Number} shield_fetch_header_bytes
 */

RealtimeMeasurements.prototype['shield_fetch_header_bytes'] = undefined;
/**
 * Total request body bytes sent to a shield.
 * @member {Number} shield_fetch_body_bytes
 */

RealtimeMeasurements.prototype['shield_fetch_body_bytes'] = undefined;
/**
 * Total response header bytes sent from a shield to the edge.
 * @member {Number} shield_fetch_resp_header_bytes
 */

RealtimeMeasurements.prototype['shield_fetch_resp_header_bytes'] = undefined;
/**
 * Total response body bytes sent from a shield to the edge.
 * @member {Number} shield_fetch_resp_body_bytes
 */

RealtimeMeasurements.prototype['shield_fetch_resp_body_bytes'] = undefined;
/**
 * Number of `Range` requests to origin for segments of resources when using segmented caching.
 * @member {Number} segblock_origin_fetches
 */

RealtimeMeasurements.prototype['segblock_origin_fetches'] = undefined;
/**
 * Number of `Range` requests to a shield for segments of resources when using segmented caching.
 * @member {Number} segblock_shield_fetches
 */

RealtimeMeasurements.prototype['segblock_shield_fetches'] = undefined;
/**
 * Number of \"Informational\" category status codes delivered by Compute@Edge.
 * @member {Number} compute_resp_status_1xx
 */

RealtimeMeasurements.prototype['compute_resp_status_1xx'] = undefined;
/**
 * Number of \"Success\" category status codes delivered by Compute@Edge.
 * @member {Number} compute_resp_status_2xx
 */

RealtimeMeasurements.prototype['compute_resp_status_2xx'] = undefined;
/**
 * Number of \"Redirection\" category status codes delivered by Compute@Edge.
 * @member {Number} compute_resp_status_3xx
 */

RealtimeMeasurements.prototype['compute_resp_status_3xx'] = undefined;
/**
 * Number of \"Client Error\" category status codes delivered by Compute@Edge.
 * @member {Number} compute_resp_status_4xx
 */

RealtimeMeasurements.prototype['compute_resp_status_4xx'] = undefined;
/**
 * Number of \"Server Error\" category status codes delivered by Compute@Edge.
 * @member {Number} compute_resp_status_5xx
 */

RealtimeMeasurements.prototype['compute_resp_status_5xx'] = undefined;
/**
 * Number of requests sent by end users to Fastly that resulted in a hit at the edge.
 * @member {Number} edge_hit_requests
 */

RealtimeMeasurements.prototype['edge_hit_requests'] = undefined;
/**
 * Number of requests sent by end users to Fastly that resulted in a miss at the edge.
 * @member {Number} edge_miss_requests
 */

RealtimeMeasurements.prototype['edge_miss_requests'] = undefined;
/**
 * Total header bytes sent to backends (origins) by Compute@Edge.
 * @member {Number} compute_bereq_header_bytes
 */

RealtimeMeasurements.prototype['compute_bereq_header_bytes'] = undefined;
/**
 * Total body bytes sent to backends (origins) by Compute@Edge.
 * @member {Number} compute_bereq_body_bytes
 */

RealtimeMeasurements.prototype['compute_bereq_body_bytes'] = undefined;
/**
 * Total header bytes received from backends (origins) by Compute@Edge.
 * @member {Number} compute_beresp_header_bytes
 */

RealtimeMeasurements.prototype['compute_beresp_header_bytes'] = undefined;
/**
 * Total body bytes received from backends (origins) by Compute@Edge.
 * @member {Number} compute_beresp_body_bytes
 */

RealtimeMeasurements.prototype['compute_beresp_body_bytes'] = undefined;
/**
 * The total number of completed requests made to backends (origins) that returned cacheable content.
 * @member {Number} origin_cache_fetches
 */

RealtimeMeasurements.prototype['origin_cache_fetches'] = undefined;
/**
 * The total number of completed requests made to shields that returned cacheable content.
 * @member {Number} shield_cache_fetches
 */

RealtimeMeasurements.prototype['shield_cache_fetches'] = undefined;
/**
 * Number of backend requests started.
 * @member {Number} compute_bereqs
 */

RealtimeMeasurements.prototype['compute_bereqs'] = undefined;
/**
 * Number of backend request errors, including timeouts.
 * @member {Number} compute_bereq_errors
 */

RealtimeMeasurements.prototype['compute_bereq_errors'] = undefined;
/**
 * Number of times a guest exceeded its resource limit, includes heap, stack, globals, and code execution timeout.
 * @member {Number} compute_resource_limit_exceeded
 */

RealtimeMeasurements.prototype['compute_resource_limit_exceeded'] = undefined;
/**
 * Number of times a guest exceeded its heap limit.
 * @member {Number} compute_heap_limit_exceeded
 */

RealtimeMeasurements.prototype['compute_heap_limit_exceeded'] = undefined;
/**
 * Number of times a guest exceeded its stack limit.
 * @member {Number} compute_stack_limit_exceeded
 */

RealtimeMeasurements.prototype['compute_stack_limit_exceeded'] = undefined;
/**
 * Number of times a guest exceeded its globals limit.
 * @member {Number} compute_globals_limit_exceeded
 */

RealtimeMeasurements.prototype['compute_globals_limit_exceeded'] = undefined;
/**
 * Number of times a service experienced a guest code error.
 * @member {Number} compute_guest_errors
 */

RealtimeMeasurements.prototype['compute_guest_errors'] = undefined;
/**
 * Number of times a service experienced a guest runtime error.
 * @member {Number} compute_runtime_errors
 */

RealtimeMeasurements.prototype['compute_runtime_errors'] = undefined;
var _default = RealtimeMeasurements;
exports["default"] = _default;